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

### Pre-Commit Hooks
Husky and lint-staged ensure that all code is linted and formatted before commits.  
This prevents broken or inconsistent code from entering the repository and improves team collaboration.
