#!/usr/bin/env bash
# ASDLC scheduler — pick the highest-priority 'dev' ticket whose dependencies
# are all satisfied (referenced issues CLOSED and their PRs MERGED into main).
#
# Usage:
#   ./orchestrator/pick-ticket.sh [--repo OWNER/REPO]
#
# Outputs:
#   On success:  the issue number on stdout (e.g. "42")
#   On deferral: nothing on stdout; skip reasons logged to stderr
#   On no match: exits 1 after logging to stderr
#
# Requires: gh CLI authenticated, jq

set -euo pipefail

REPO="${ASDLC_REPO:-svv2014/ppl-study}"
MAIN_BRANCH="main"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --repo) REPO="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

log() { echo "[asdlc] $*" >&2; }

# --- Fetch all open 'dev'-labeled issues, ordered by priority label then number ---
log "Fetching open 'dev' issues from $REPO …"
ISSUES=$(gh issue list \
  --repo "$REPO" \
  --label "dev" \
  --state open \
  --limit 100 \
  --json number,title,labels,body \
  --jq 'sort_by(
    [
      (if (.labels[].name | test("p1")) then 0
       elif (.labels[].name | test("p2")) then 1
       elif (.labels[].name | test("p3")) then 2
       else 3 end) | min,
      .number
    ]
  )')

ISSUE_COUNT=$(echo "$ISSUES" | jq 'length')
log "Found $ISSUE_COUNT open dev ticket(s)."

if [[ "$ISSUE_COUNT" -eq 0 ]]; then
  log "No open dev tickets — nothing to do."
  exit 0
fi

# ---------------------------------------------------------------------------
# parse_deps BODY
#   Extracts #NNN references from the ## Dependencies section of an issue body.
#   Prints one issue number per line (without the '#').
#   Returns 0 (no deps / none declared) when the section says "none".
# ---------------------------------------------------------------------------
parse_deps() {
  local body="$1"

  # Short-circuit: explicit "Dependencies: none" anywhere in the body
  if echo "$body" | grep -qiE "^[[:space:]]*(##[[:space:]]+)?[Dd]ependencies[[:space:]]*:[[:space:]]*none"; then
    return 0
  fi

  # Extract the ## Dependencies section (everything up to the next ##-level heading)
  local section
  section=$(echo "$body" | awk '
    /^##[[:space:]]+[Dd]ependencies/ { capture=1; next }
    capture && /^##[[:space:]]/ { capture=0 }
    capture { print }
  ')

  # Pull #NNN references (from "Blocked by #NNN", "#NNN, #MMM", etc.)
  echo "$section" | grep -oE '#[0-9]+' | tr -d '#' | sort -un || true
}

# ---------------------------------------------------------------------------
# dep_satisfied ISSUE_NUMBER REPO
#   Returns 0 if the issue is CLOSED and its associated PR is MERGED into main.
#   Returns 1 otherwise, printing the reason to stderr.
# ---------------------------------------------------------------------------
dep_satisfied() {
  local dep_num="$1"
  local repo="$2"

  # Check issue state
  local issue_state
  issue_state=$(gh issue view "$dep_num" --repo "$repo" --json state --jq '.state' 2>/dev/null || echo "UNKNOWN")

  if [[ "$issue_state" != "CLOSED" ]]; then
    log "  dep #$dep_num is $issue_state (not closed)"
    return 1
  fi

  # Find merged PRs that close this issue (search commit messages and PR bodies)
  local merged_pr
  merged_pr=$(gh pr list \
    --repo "$repo" \
    --state merged \
    --base "$MAIN_BRANCH" \
    --search "closes #$dep_num OR fixes #$dep_num OR resolves #$dep_num" \
    --json number \
    --jq '.[0].number // empty' 2>/dev/null || true)

  if [[ -z "$merged_pr" ]]; then
    # Fallback: look for PRs whose body/title references the dep issue number
    merged_pr=$(gh pr list \
      --repo "$repo" \
      --state merged \
      --base "$MAIN_BRANCH" \
      --search "#$dep_num" \
      --json number \
      --jq '.[0].number // empty' 2>/dev/null || true)
  fi

  if [[ -z "$merged_pr" ]]; then
    log "  dep #$dep_num is CLOSED but no merged PR into $MAIN_BRANCH found"
    return 1
  fi

  log "  dep #$dep_num satisfied (CLOSED, PR #$merged_pr merged into $MAIN_BRANCH)"
  return 0
}

# ---------------------------------------------------------------------------
# Main loop — walk issues in priority order, return first fully-satisfied one
# ---------------------------------------------------------------------------
SELECTED=""
ANY_CANDIDATE=false

while IFS= read -r issue_json; do
  num=$(echo "$issue_json" | jq -r '.number')
  title=$(echo "$issue_json" | jq -r '.title')
  body=$(echo "$issue_json" | jq -r '.body // ""')

  log "Evaluating #$num: $title"

  deps=$(parse_deps "$body")

  if [[ -z "$deps" ]]; then
    log "  #$num has no dependencies — eligible"
    ANY_CANDIDATE=true
    SELECTED="$num"
    break
  fi

  ALL_MET=true
  while IFS= read -r dep; do
    [[ -z "$dep" ]] && continue
    log "  checking dep #$dep …"
    if ! dep_satisfied "$dep" "$REPO"; then
      log "#$num deferred — dependency #$dep still open or PR not merged"
      ALL_MET=false
      break
    fi
  done <<< "$deps"

  if $ALL_MET; then
    ANY_CANDIDATE=true
    SELECTED="$num"
    break
  fi
done < <(echo "$ISSUES" | jq -c '.[]')

if [[ -z "$SELECTED" ]]; then
  if $ANY_CANDIDATE; then
    log "All dev tickets have unmet dependencies — nothing to pick up this cycle."
  else
    log "No eligible dev tickets found."
  fi
  exit 1
fi

log "Selected ticket: #$SELECTED"
echo "$SELECTED"
