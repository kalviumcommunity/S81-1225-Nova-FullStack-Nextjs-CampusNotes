# Code Review Checklist

Use this checklist to guide reviews before approving a PR. Reviewers should verify the items below and add comments when issues are found.

## Functionality
- [ ] Feature works and matches the description/requirements
- [ ] Edge cases handled and validated
- [ ] Manual test steps are included in the PR

## Quality & Style
- [ ] Code is easy to read and follows project naming conventions
- [ ] Commit messages are clear and focused
- [ ] No duplicated code; logic is factored appropriately

## Tests & CI
- [ ] Unit tests added/updated for new behavior
- [ ] Integration/E2E tests added/updated if applicable
- [ ] All CI checks pass (lint, type-check, tests)

## Security & Performance
- [ ] No secrets or credentials committed
- [ ] Inputs validated and sanitized where needed
- [ ] No obvious performance regressions

## Documentation
- [ ] README or docs updated for public-facing changes
- [ ] Inline comments added for non-obvious logic

## Accessibility
- [ ] UI changes accessible (keyboard, aria attributes)
- [ ] Colors, contrast, semantic elements considered

## Approvals & Merging
- [ ] At least one approval (two approvals for major changes)
- [ ] All requested changes addressed
- [ ] Rebase/squash strategy followed (per project preference)

---

Tip: If a change is risky or wide-reaching, request a short pairing session with the author to review together.