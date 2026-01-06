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

---

## Docker & Local Development Setup

This project uses Docker and Docker Compose to create a consistent local development environment with all required services.

### Dockerfile

The `Dockerfile` defines how the Next.js application is containerized:

- **Base Image**: `node:20-alpine` — Lightweight Alpine Linux with Node.js 20
- **Working Directory**: `/app` — All commands run inside this directory
- **Dependency Installation**: Copies `package.json` and `package-lock.json`, then runs `npm install`
- **Build Process**: Copies source files and builds the Next.js app using `npm run build`
- **Port Exposure**: Exposes port `3000` for the application
- **Start Command**: Runs `npm run start` to serve the production build

### Docker Compose Services

The `docker-compose.yml` orchestrates three services:

#### **app** (Next.js Application)
- Builds from the local `Dockerfile`
- Container name: `nextjs_app`
- Ports: Maps `3000:3000` (host:container)
- Environment variables:
  - `DATABASE_URL`: Connection string for PostgreSQL
  - `REDIS_URL`: Connection string for Redis
- Depends on `db` and `redis` services to start first
- Connected to `localnet` network

#### **db** (PostgreSQL Database)
- Image: `postgres:15-alpine`
- Container name: `postgres_db`
- Always restarts on failure
- Environment variables:
  - `POSTGRES_USER=postgres`
  - `POSTGRES_PASSWORD=password`
  - `POSTGRES_DB=mydb`
- Ports: Exposes `5432` for database connections
- Uses named volume `db_data` for persistent storage
- Connected to `localnet` network

#### **redis** (Redis Cache)
- Image: `redis:7-alpine`
- Container name: `redis_cache`
- Ports: Exposes `6379` for Redis connections
- Connected to `localnet` network

### Network & Storage

- **localnet**: A custom bridge network that allows all services to communicate using service names (e.g., `db`, `redis`)
- **db_data**: A named volume that persists PostgreSQL data even when containers are removed

### Running the Setup

Start all services:
```bash
docker-compose up --build
```

Verify running containers:
```bash
docker ps
```

Stop all services:
```bash
docker-compose down
```

Remove all containers and volumes:
```bash
docker-compose down -v
```

---

## Challenges & Learnings

Docker ensures every team member runs the exact same environment, eliminating "works on my machine" issues. Common challenges include port conflicts (if 3000, 5432, or 6379 are already in use), initial build time for the Next.js image, and permission issues on Linux/Mac with volume mounts. Docker Compose simplified multi-service orchestration by handling networking, dependencies, and service startup order automatically. This setup significantly improves onboarding speed and reduces environment-related bugs.

