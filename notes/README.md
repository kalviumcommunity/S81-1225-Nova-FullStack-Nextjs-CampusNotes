## Advanced Data Fetching & Rendering (Concept-1)

### Static Rendering (SSG)
- Page: About
- Generated at build time
- Used for static informational content

### Dynamic Rendering (SSR)
- Page: Dashboard
- Generated on every request
- Used for user-specific data

### Hybrid Rendering (ISR)
- Page: Notes
- Revalidated every 60 seconds
- Balances performance and freshness

### Reflection
If the app had 10x more users, we would reduce SSR usage and rely more on SSG and ISR to lower server load and improve scalability.



## CONCEPT-2:

## Environment-Aware Builds & Secrets Management (Concept-2)

This project uses separate environment configurations for development, staging, and production.

### Environment Files
- `.env.development` for local development
- `.env.staging` for staging builds
- `.env.production` for production builds
- `.env.example` is committed as a reference

All real secrets are excluded from version control using `.gitignore`.

### Secrets Management
Sensitive values such as API URLs and database credentials are stored securely using GitHub Secrets. These secrets are injected during build and runtime and are never hardcoded in the application.

### Environment-Specific Builds
Separate build commands are used to ensure each environment uses the correct configuration:
- `npm run build:staging`
- `npm run build:production`

### Reflection
Using multiple environments improves CI/CD reliability by preventing accidental production issues, enabling safer testing, and ensuring consistent deployments across different stages.



**Benefits:**
- Faster deployments
- Reduced manual errors
- Reliable production releases

---

### Secrets & Environment Management

Sensitive data is never committed to the repository.

- Secrets are stored using:
  - GitHub Secrets
  - Cloud provider environment variables
- Separate environments:
  - Development
  - Staging
  - Production

Examples:
- Database URLs
- API keys
- Authentication secrets

---

### Cloud Deployment (Conceptual)

The application is designed to be deployed on cloud services such as:

- **AWS EC2 / Elastic Beanstalk**
- **Azure App Service**

Supporting services:
- PostgreSQL (RDS / Azure Database)
- Redis (ElastiCache)
- Object Storage (S3 / Blob Storage)

---

### Deployment Challenges & Learnings

**Challenges:**
- Handling environment-specific variables
- Debugging CI/CD failures due to missing secrets

**What Worked Well:**
- Docker ensured consistent builds
- CI/CD automation reduced manual effort

**Future Improvements:**
- Add staging environment
- Improve monitoring and logging
- Explore Infrastructure as Code (Terraform/Bicep)

---

## Conclusion

CampusNotes demonstrates how modern full-stack applications can leverage **Next.js rendering strategies**, **Docker**, and **CI/CD pipelines** to achieve scalable, secure, and reliable cloud deployments.

This project reflects real-world engineering practices and production-ready architectural thinking.

---

## Branching & PR Workflow 🔀
We follow a standard branching and pull request workflow to keep the codebase stable and maintainable. See `docs/branching_and_pr_workflow.md` for full details, including branch naming conventions, PR process, and branch protection guidance.

- PR template: `.github/pull_request_template.md`
- Code review checklist: `.github/CODE_REVIEW_CHECKLIST.md`
- Add screenshots of branch protection and passing PRs to `.github/placeholder-screenshots/`

If you want, create a branch off `main` (e.g., `chore/add-pr-template-branching-docs`), make changes, push the branch, and open a PR to demonstrate the workflow.

---
