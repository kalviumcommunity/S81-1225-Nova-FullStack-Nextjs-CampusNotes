# Escape the Island – Full Stack Project

## 📌 Project Overview
This project is part of Sprint #1 and focuses on setting up a clean and scalable Next.js (TypeScript) application.  
The goal is to create a strong foundation that can easily grow as features are added in future sprints.

---

## 📁 Folder Structure

src/
├── app/ # Application routes and pages using Next.js App Router
├── components/ # Reusable UI components
├── lib/ # Utility functions, helpers, and configuration files


### Folder Explanation
- **app/**: Handles routing, layouts, and page-level components using the App Router.
- **components/**: Contains reusable UI components to avoid repetition and improve maintainability.
- **lib/**: Stores shared logic such as constants, helpers, and future API utilities.

This modular structure keeps the codebase clean and easy to scale.

---

## ⚙️ Setup Instructions

### Install dependencies
```bash
npm install

## 🧹 Code Quality & Consistency

### TypeScript Configuration
Strict TypeScript mode is enabled to catch potential bugs at compile time.  
Rules like `noImplicitAny` and `noUnusedLocals` help prevent unclear or unused code.

### ESLint & Prettier
ESLint ensures best practices and code correctness, while Prettier enforces consistent formatting.  
Custom rules prevent console logs, enforce semicolons, and standardize quotes.

This project reflects real-world engineering practices and production-ready architectural thinking.

---

## Branching & PR Workflow 🔀
We follow a standard branching and pull request workflow to keep the codebase stable and maintainable. See `docs/branching_and_pr_workflow.md` for full details, including branch naming conventions, PR process, and branch protection guidance.

- PR template: `.github/pull_request_template.md`
- Code review checklist: `.github/CODE_REVIEW_CHECKLIST.md`
- Add screenshots of branch protection and passing PRs to `.github/placeholder-screenshots/`

If you want, create a branch off `main` (e.g., `chore/add-pr-template-branching-docs`), make changes, push the branch, and open a PR to demonstrate the workflow.

---
