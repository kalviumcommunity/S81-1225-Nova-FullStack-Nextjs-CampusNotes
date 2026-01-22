# Database Migrations & Seeding Setup Guide

## Quick Start for Local Development

### Prerequisites

1. **Docker** - Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
2. **PostgreSQL** - Via Docker Compose (easiest way)
3. **Node.js** - Already installed

### Step 1: Start PostgreSQL via Docker Compose

```bash
# Navigate to project root
cd notes

# Start PostgreSQL and Redis containers
docker-compose up -d

# Verify containers are running
docker ps
```

You should see:
- `campusnotes-db` (PostgreSQL)
- `campusnotes-redis` (Redis - optional for now)

### Step 2: Create Initial Migration

```bash
# Create the first migration from schema.prisma
npm run db:migrate -- --name init_schema
```

This will:
1. Generate SQL files in `prisma/migrations/`
2. Apply changes to PostgreSQL database
3. Create all tables and relationships

**Expected Output:**
```
✔ Created migration: 20260122_init_schema
✔ Applied migration: 20260122_init_schema
✔ Generated Prisma Client
```

### Step 3: Seed Initial Data

```bash
# Run seed script to populate sample data
npm run db:seed
```

**Expected Output:**
```
🌱 Starting database seeding...
👤 Creating users...
✅ Created/Updated 3 users
📚 Creating courses...
✅ Created/Updated 3 courses
...
✨ Database seeding completed successfully! ✨
```

### Step 4: Verify Data with Prisma Studio

```bash
# Open visual database explorer
npm run db:studio
```

Browse to http://localhost:5555 to:
- View all tables
- Inspect relationships
- Add/edit/delete records
- Verify seed data

---

## Migration Files Structure

### Location
```
prisma/
├── migrations/
│   ├── migration_lock.toml
│   ├── 20260122074531_init_schema/
│   │   └── migration.sql
│   └── 20260122074532_add_role_to_user/
│       └── migration.sql
└── schema.prisma
```

### Migration File Contents

Each migration contains:
- **SQL statements** to alter database structure
- **Migration metadata** for tracking
- **Rollback information** for reverting changes

**Example: 20260122074531_init_schema/migration.sql**
```sql
-- CreateTable User
CREATE TABLE "User" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable Course
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL UNIQUE,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- ... more tables ...
```

---

## Common Migration Tasks

### 1. Add a New Field to Existing Model

**Update schema.prisma:**
```prisma
model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String
  password  String
  avatar    String?
  bio       String?        // NEW FIELD
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}
```

**Run migration:**
```bash
npm run db:migrate -- --name add_bio_to_user
```

### 2. Create a New Model

**Update schema.prisma:**
```prisma
model Comment {
  id        Int       @id @default(autoincrement())
  content   String
  userId    Int
  noteId    Int
  createdAt DateTime  @default(now())
  
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  note      Note      @relation(fields: [noteId], references: [id], onDelete: Cascade)
}
```

**Add relationship to Note:**
```prisma
model Note {
  // ... existing fields ...
  comments  Comment[]   // NEW RELATION
}
```

**Run migration:**
```bash
npm run db:migrate -- --name add_comment_model
```

### 3. Add Database Index for Performance

```prisma
model Note {
  id        Int       @id @default(autoincrement())
  title     String
  userId    Int
  courseId  Int
  
  // Create indices for faster queries
  @@index([userId])
  @@index([courseId])
}
```

**Run migration:**
```bash
npm run db:migrate -- --name add_indexes_to_note
```

---

## Rollback & Reset Procedures

### Reset Everything (Use with Caution)

```bash
# WARNING: This deletes ALL data and recreates schema
npm run db:reset

# Or manually:
npx prisma migrate reset --force  # Skip confirmation
```

### Rollback Last Migration

```bash
# Revert to previous state
npx prisma migrate resolve --rolled-back 20260122074532_add_role_to_user
```

### Cherry-pick Migrations

```bash
# Apply specific migration
npx prisma migrate deploy --create-only
```

---

## Seed Script Details

### File: `prisma/seed.ts`

The seed script handles:
1. **User Creation** - 3 sample users with different roles
2. **Course Creation** - 3 academic courses (CS101, CS201, WEB101)
3. **Enrollment** - Users enrolled in courses
4. **Folders** - Organizational folders per user
5. **Tags** - User-specific tags for categorization
6. **Notes** - Sample notes with rich content
7. **Associations** - Linking notes to tags

### Idempotency Pattern

```typescript
const user = await prisma.user.upsert({
  where: { email: 'alice@campusnotes.com' },
  update: {},  // No update if exists
  create: {    // Only create if doesn't
    email: 'alice@campusnotes.com',
    name: 'Alice Johnson',
  },
});
```

**Benefits:**
- ✅ Run seed multiple times safely
- ✅ Update existing data if needed
- ✅ No duplicate errors

### Custom Seed Data

To add your own seed data, edit `prisma/seed.ts`:

```typescript
// Add after existing seed operations
const myUser = await prisma.user.upsert({
  where: { email: 'myemail@example.com' },
  update: {},
  create: {
    email: 'myemail@example.com',
    name: 'My User',
    password: 'hashed_password',
  },
});
```

Then run:
```bash
npm run db:seed
```

---

## Environment Configuration

### Development (.env)
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/campusnotes"
NODE_ENV="development"
```

### Staging/Production (.env.production)
```
DATABASE_URL="postgresql://[user]:[password]@[host]:5432/campusnotes"
NODE_ENV="production"
```

**Never commit actual credentials!** Use environment variables.

---

## Troubleshooting

### Issue: "Connection refused"
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solution:**
- Ensure Docker containers are running: `docker-compose ps`
- Start containers: `docker-compose up -d`
- Wait 10 seconds for PostgreSQL to initialize

### Issue: "Permission denied"
```
Error: permission denied for schema public
```

**Solution:**
- Reset database: `npm run db:reset`
- Check DATABASE_URL in .env
- Verify PostgreSQL user has rights

### Issue: "Unique constraint violation"
```
Error: Unique constraint failed on User.email
```

**Solution:**
- Reset database: `npm run db:reset`
- Or manually delete conflicting records

### Issue: "Migration already exists"
```
Error: A migration with the same name already exists
```

**Solution:**
- Use unique migration names with timestamps
- Check existing migrations in `prisma/migrations/`

---

## Production Deployment

### Pre-Migration Checklist

- [ ] Database backup created and tested
- [ ] Migration tested in staging environment
- [ ] Rollback plan documented
- [ ] Team notified of maintenance window
- [ ] Monitoring dashboards prepared
- [ ] Connection pool cleared
- [ ] Read replicas configured (if applicable)

### Deployment Commands

```bash
# 1. Backup production database
pg_dump production_db > backup_$(date +%Y%m%d_%H%M%S).sql

# 2. Apply migrations to production
npx prisma migrate deploy

# 3. Verify migration success
npm run db:studio  # Or check logs

# 4. Monitor for errors
tail -f app.log
```

### Rollback from Production

```bash
# Restore from backup
psql production_db < backup_20260122.sql

# Or reset Prisma tracking
npx prisma migrate resolve --rolled-back migration_name
```

---

## Verification Checklist

After running migrations and seed:

- [ ] `prisma/migrations/` folder exists with timestamp folders
- [ ] Each migration contains `migration.sql` file
- [ ] All tables created in PostgreSQL
- [ ] Relationships established correctly
- [ ] Seed data inserted successfully
- [ ] Prisma Studio shows all records
- [ ] Can query with: `const users = await prisma.user.findMany()`
- [ ] Prisma Client regenerated with new types
- [ ] No errors in application logs

---

## References

- [Prisma Migrate Documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Prisma Seeding Guide](https://www.prisma.io/docs/guides/prisma-guides/seed-database)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Compose Reference](https://docs.docker.com/compose/)

---

**Last Updated:** January 22, 2026
**Status:** Ready for Implementation
