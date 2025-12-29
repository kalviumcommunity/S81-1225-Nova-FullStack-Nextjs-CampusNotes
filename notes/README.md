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


## Environment Variable Management

This project follows secure and professional practices for managing environment variables and secrets in a Next.js application.

### Environment Files Used

- **.env.local**
  - Stores actual credentials such as database URLs, API keys, and secrets.
  - Used only in local development.
  - Never committed to version control.

- **.env.example**
  - Serves as a template listing all required environment variables.
  - Contains placeholder values and comments explaining each variable.
  - Helps new developers replicate the setup safely.

---

### Server-side vs Client-side Variables

Next.js exposes environment variables to the browser **only if they are prefixed with `NEXT_PUBLIC_`**.

- **Server-side only variables**
  - `DATABASE_URL`
  - `REDIS_URL`
  - `NEXTAUTH_SECRET`
  - `AWS_S3_BUCKET_NAME`

  These are accessed only on the server using:
  ```js
  process.env.DATABASE_URL
