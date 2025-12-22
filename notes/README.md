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
