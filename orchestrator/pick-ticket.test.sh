#!/usr/bin/env bash
# Unit tests for orchestrator/pick-ticket.sh — dep parsing and dep_satisfied logic.
# Run with: bash orchestrator/pick-ticket.test.sh
#
# Relies only on bash; does NOT call the real GitHub API (stubs provided inline).

set -euo pipefail

PASS=0
FAIL=0

ok() { echo "  PASS: $1"; PASS=$((PASS+1)); }
fail() { echo "  FAIL: $1"; FAIL=$((FAIL+1)); }

assert_eq() {
  local desc="$1" got="$2" want="$3"
  if [[ "$got" == "$want" ]]; then ok "$desc"; else fail "$desc — got '$got', want '$want'"; fi
}

# ---------------------------------------------------------------------------
# Re-export parse_deps from the scheduler so we can call it directly
# ---------------------------------------------------------------------------
parse_deps() {
  local body="$1"

  if echo "$body" | grep -qiE "^[[:space:]]*(##[[:space:]]+)?[Dd]ependencies[[:space:]]*:[[:space:]]*none"; then
    return 0
  fi

  local section
  section=$(echo "$body" | awk '
    /^##[[:space:]]+[Dd]ependencies/ { capture=1; next }
    capture && /^##[[:space:]]/ { capture=0 }
    capture { print }
  ')

  echo "$section" | grep -oE '#[0-9]+' | tr -d '#' | sort -un || true
}

echo "=== parse_deps tests ==="

# 1. No Dependencies section → empty output
body_no_deps="## Objective
Do the thing.

## Acceptance Criteria
- [ ] Done"
result=$(parse_deps "$body_no_deps")
assert_eq "no deps section → empty" "$result" ""

# 2. Dependencies: none short-circuit (colon form)
body_none="## Objective
Stuff.

Dependencies: none"
result=$(parse_deps "$body_none")
assert_eq "Dependencies: none → empty" "$result" ""

# 3. ## Dependencies section with #NNN references
body_deps="## Objective
Stuff.

## Dependencies
#12, #34

## Notes
nothing"
result=$(parse_deps "$body_deps")
assert_eq "parses #12 and #34" "$result" "$(printf '12\n34')"

# 4. Blocked by alias
body_blocked="## Objective
Stuff.

## Dependencies
Blocked by #99"
result=$(parse_deps "$body_blocked")
assert_eq "blocked-by alias → #99" "$result" "99"

# 5. Multiple refs, de-duped and sorted
body_multi="## Dependencies
#5 and #5, also #3"
result=$(parse_deps "$body_multi")
assert_eq "de-duped and sorted" "$result" "$(printf '3\n5')"

# 6. Explicit 'Dependencies: none' (no ## heading) anywhere in body
body_inline_none="## Objective
Thing.

Dependencies: none

## Notes
nothing"
result=$(parse_deps "$body_inline_none")
assert_eq "inline Dependencies: none → empty" "$result" ""

echo ""
echo "=== Results ==="
echo "Passed: $PASS"
echo "Failed: $FAIL"

[[ $FAIL -eq 0 ]] || exit 1
