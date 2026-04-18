## Summary

<!-- 1–3 bullets. What changed, why. -->

## Closes

<!-- Closes #N for each issue this PR resolves. -->

## Test plan

- [ ] ...

## ASDLC flow

Merging happens automatically once this PR is labeled `qa-pass`:

1. Reviewer (human or QA worker) verifies the work matches acceptance criteria.
2. Reviewer applies `qa-pass` label.
3. `.github/workflows/auto-merge-qa-pass.yml` enables GitHub auto-merge.
4. Once required checks are green, PR squash-merges and the branch is deleted.

If you hit `qa-fail`, fix the issue and push — the same PR can be re-labelled `qa-pass` when ready.
