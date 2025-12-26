# Branching & PR Workflow

## Branch Naming Convention
Use the following prefixes for branch names:

- `feature/<feature-name>` — New features (example: `feature/login-auth`)
- `fix/<bug-name>` — Bug fixes (example: `fix/navbar-alignment`)
- `chore/<task-name>` — Chores and maintenance (example: `chore/update-deps`)
- `docs/<update-name>` — Documentation updates
- `hotfix/<issue>` — Urgent production fixes

Keep names short, hyphen-separated, and descriptive.

## Pull Request Process
1. Create a branch off `main` following the naming conventions.
2. Open a PR targeting `main` and use the PR template (`.github/pull_request_template.md`).
3. Add at least one reviewer and include reproduction steps in the PR description.
4. Ensure all CI checks pass (lint, tests, build).
5. Resolve review comments and get the required approvals.
6. Merge using `Squash and merge` (recommended) or follow repo-specific policy.

## Code Review Expectations
Follow the `.github/CODE_REVIEW_CHECKLIST.md` as part of your review.

## Branch Protection Rules (to configure in GitHub)
Recommended rules for the `main` branch:

- Require pull request reviews before merging (1-2 approvers)
- Require status checks to pass before merging (e.g. `lint`, `test`)
- Require branches to be up-to-date before merging
- Require signed commits (optional)
- Restrict who can push to `main` (generally disallow direct pushes)
- Enforce admin settings if desired to include administrators

> After configuring, take a screenshot of the branch protection settings and add it to `.github/placeholder-screenshots/`.

## Demo & Submission
- Take screenshots of: (a) branch protection rules, (b) a PR with checks passing, and add them under `.github/placeholder-screenshots/`.
- Create a short 1–2 minute video demo (Google Drive — set to “Anyone with the link can edit”).
- In the demo show: branch naming, PR creation, template/checklist in action, and how protection rules block direct pushes.

## Example workflow for weekly releases
- Create `release/<date>` branches when preparing releases
- Use PRs to merge feature branches into `release/*` for testing, then into `main` when ready
- This keeps `main` stable while enabling active development on feature branches

---

If you'd like, I can also create a sample PR branch and prepare a draft PR (subject to your remote access) — let me know if I should proceed.