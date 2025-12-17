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
