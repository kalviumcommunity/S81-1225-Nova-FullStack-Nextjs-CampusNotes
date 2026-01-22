# Database Migrations & Seed Scripts - Complete Guide

## Overview

This document provides a complete reference for managing database migrations and seeding with Prisma ORM in the Campus Notes application.

---

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Migration Workflow](#migration-workflow)
3. [Seeding Data](#seeding-data)
4. [Verification & Testing](#verification--testing)
5. [Rollback & Recovery](#rollback--recovery)
6. [Production Deployment](#production-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Prerequisites

- PostgreSQL database running (via Docker or local installation)
- Node.js and npm installed
- Prisma CLI available

### Environment Configuration

Create `.env` with your database connection:

```env
# Development Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/campusnotes"
NODE_ENV="development"
```

### Docker Database Setup

Start PostgreSQL container:

```bash
docker-compose up -d db
sleep 5  # Wait for database to start
```

Verify connection:

```bash
psql postgresql://postgres:postgres@localhost:5432/campusnotes -c "SELECT version();"
```

---

## Migration Workflow

### Step 1: Initial Schema Migration

Create the first migration from your Prisma schema:

```bash
npx prisma migrate dev --name init_schema
```

**What happens:**
- Scans `prisma/schema.prisma` for all models
- Generates SQL migration file in `prisma/migrations/20260122_init_schema/`
- Creates all tables with relationships
- Updates `_prisma_migrations` tracking table
- Regenerates Prisma Client types

**Expected output:**
```
✔ Successfully created 7 new tables

Migration: 20260122_init_schema

The following migration(s) have been created and applied:

migrations/
  └─ 20260122_init_schema/
     └─ migration.sql

Your database is now in sync with your schema.
```

**Generated migration.sql includes:**

```sql
-- User table
CREATE TABLE "User" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "avatar" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Course table
CREATE TABLE "Course" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "code" TEXT NOT NULL UNIQUE,
  "description" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- [All other tables...]

-- Indexes and foreign keys follow...
```

### Step 2: Modifying Schema and Creating New Migrations

When adding a new feature (e.g., notification system):

**Update `prisma/schema.prisma`:**

```prisma
model Notification {
  id        Int       @id @default(autoincrement())
  userId    Int
  title     String
  message   String
  isRead    Boolean   @default(false)
  createdAt DateTime  @default(now())
  
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// Add relation to User model:
model User {
  // ... existing fields ...
  notifications  Notification[]
}
```

**Create new migration:**

```bash
npx prisma migrate dev --name add_notifications_feature
```

**Output:**
```
✔ Created a new migration: migrations/20260122_add_notifications_feature/migration.sql
✔ Your database is now in sync with your schema.
```

**New migration contains only new changes:**

```sql
-- CreateTable Notification
CREATE TABLE "Notification" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "userId" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "isRead" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE
);

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");
```

### Step 3: Migration Status Check

View migration history:

```bash
npx prisma migrate status

# Output:
Following migration have not yet been applied:
  └─ 20260122_add_notifications_feature

Following migration have been applied:
  └─ 20260122_init_schema
```

---

## Seeding Data

### Seed Script Overview

Located at `prisma/seed.ts`, the seed script:
- Creates sample users, courses, notes
- Establishes relationships (enrollments, tags)
- Uses `upsert` for idempotency
- Runs automatically with `migrate reset`

### Running the Seed Script

```bash
# Option 1: Direct seed command
npm run db:seed

# Option 2: Via Prisma CLI
npx prisma db seed

# Option 3: Auto-seed on migration reset
npx prisma migrate reset  # Seeds automatically at the end
```

### Seeding Workflow

**Step 1: Create Sample Users**

```typescript
const alice = await prisma.user.upsert({
  where: { email: 'alice@campusnotes.com' },
  update: {},  // Don't update if exists
  create: {
    email: 'alice@campusnotes.com',
    name: 'Alice Johnson',
    password: 'hashed_password_123',  // Note: Never hardcode in production!
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
  },
});

// Upsert prevents duplicates when re-running seed
```

**Step 2: Create Sample Courses**

```typescript
const csAlgorithms = await prisma.course.upsert({
  where: { code: 'CS101' },
  update: {},
  create: {
    code: 'CS101',
    title: 'Introduction to Algorithms',
    description: 'Study of algorithm design and analysis',
  },
});
```

**Step 3: Establish Relationships**

```typescript
// Course enrollment (user takes course)
await prisma.courseEnrollment.upsert({
  where: {
    userId_courseId: { userId: alice.id, courseId: csAlgorithms.id },
  },
  update: {},
  create: {
    userId: alice.id,
    courseId: csAlgorithms.id,
  },
});
```

**Step 4: Seed Folders and Tags**

```typescript
const aliceAlgoFolder = await prisma.folder.upsert({
  where: { id: 1 },
  update: {},
  create: {
    name: 'Algorithm Concepts',
    userId: alice.id,
  },
});

const importantTag = await prisma.tag.upsert({
  where: { userId_name: { userId: alice.id, name: 'Important' } },
  update: {},
  create: {
    name: 'Important',
    userId: alice.id,
  },
});
```

**Step 5: Create Notes and Associate Tags**

```typescript
const note1 = await prisma.note.upsert({
  where: { id: 1 },
  update: {},
  create: {
    title: 'Big O Notation Explained',
    content: 'Detailed explanation of time complexity...',
    userId: alice.id,
    courseId: csAlgorithms.id,
    folderId: aliceAlgoFolder.id,
    isPinned: true,
  },
});

// Associate note with tag
await prisma.tagOnNote.upsert({
  where: { id: 1 },
  update: {},
  create: {
    noteId: note1.id,
    tagId: importantTag.id,
  },
});
```

### Example Seed Output

```
🌱 Starting database seeding...

👤 Creating users...
✅ Created/Updated 3 users

📚 Creating courses...
✅ Created/Updated 3 courses

📝 Creating course enrollments...
✅ Created/Updated 4 course enrollments

📁 Creating folders...
✅ Created/Updated 3 folders

🏷️  Creating tags...
✅ Created/Updated 3 tags

📖 Creating notes...
✅ Created/Updated 4 notes

🔗 Creating note-tag associations...
✅ Created/Updated 4 note-tag associations

═══════════════════════════════════════════════════════
✨ Database seeding completed successfully! ✨
═══════════════════════════════════════════════════════

📊 Seeded Data Summary:
   • Users: 3
   • Courses: 3
   • Course Enrollments: 4
   • Folders: 3
   • Notes: 4
   • Tags: 3
   • Note-Tag Associations: 4

💡 Pro Tip: Run "npm run db:studio" to view data in Prisma Studio!
```

---

## Verification & Testing

### Using Prisma Studio

Prisma Studio provides a GUI for database inspection:

```bash
npm run db:studio
# Opens browser at http://localhost:5555
```

**Features:**
- Browse all tables and records
- Filter and search data
- Edit records directly
- Create new records
- Delete records
- Query builder

### Verifying Seeded Data

**Check all users:**

```bash
npx prisma studio
# Navigate to User table in browser
# Verify: alice@campusnotes.com, bob@campusnotes.com, charlie@campusnotes.com exist
```

**Query via Prisma Client:**

```typescript
import { prisma } from '@/lib/prisma';

// Check seeding
const users = await prisma.user.findMany();
console.log(`Total users: ${users.length}`);  // Should be 3

const courses = await prisma.course.findMany();
console.log(`Total courses: ${courses.length}`);  // Should be 3

const notes = await prisma.note.findMany({ include: { tags: true } });
console.log(`Total notes: ${notes.length}`);  // Should be 4
```

### Testing Idempotency

Run seed twice to verify idempotency:

```bash
# First run
npm run db:seed
# Output: "Created/Updated"

# Second run
npm run db:seed
# Output: Should also show "Created/Updated" (not errors)
# Data should remain unchanged
```

**Verification:**
- ✅ No duplicate key errors
- ✅ No errors during execution
- ✅ Data count unchanged
- ✅ Can run multiple times safely

---

## Rollback & Recovery

### Development Environment

**Reset Everything (Destructive):**

```bash
# Drops database, recreates schema, reseeds
npx prisma migrate reset
```

**Confirm when prompted:**
```
⚠️  We detected unsaved migration(s).
? Do you want to create a migration for the changes you made to your Prisma schema? › (Y/n)
? Do you want to reset your database? › (Y/n)
? Do you want to run the seeding script? › (Y/n)
```

**What it does:**
1. Drops entire database
2. Creates new empty database
3. Applies all migrations in order
4. Runs seed script
5. Result: Clean database with seed data

### Production Environment

**Never use `migrate reset` in production!**

Instead, follow this approach:

### Option 1: Rollback with Backup

```bash
# 1. Create backup before migration
pg_dump -U postgres campusnotes > backup_20260122.sql

# 2. If migration fails, restore from backup
psql -U postgres campusnotes < backup_20260122.sql

# 3. Investigate issue
# 4. Fix in `prisma/schema.prisma`
# 5. Create corrective migration
```

### Option 2: Blue-Green Deployment

```bash
# 1. Keep existing database (Blue)
# 2. Create new database (Green)
# 3. Copy data from Blue to Green
# 4. Apply migrations to Green only
# 5. Run comprehensive tests on Green
# 6. Switch traffic from Blue to Green
# 7. Keep Blue as fallback
```

### Option 3: Resolve Migration Conflict

If a migration failed during execution:

```bash
# Mark migration as rolled back (only if it partially applied)
npx prisma migrate resolve --rolled-back <migration_name>

# Then create corrective migration
npx prisma migrate dev --name fix_migration_name
```

---

## Production Deployment

### Pre-Migration Checklist

- [ ] Full database backup created
- [ ] Backup tested and verified restorable
- [ ] Migration tested in staging environment
- [ ] Data integrity validation prepared
- [ ] Rollback procedure documented
- [ ] Team notified of maintenance window
- [ ] DBA/engineer on standby
- [ ] Monitoring and alerts configured

### Migration Steps

```bash
# 1. Create pre-migration backup
pg_dump -U postgres campusnotes > backup_pre_migration.sql

# 2. Enable read-only mode (optional but recommended)
# Application should be paused

# 3. Apply migration
npx prisma migrate deploy  # Use 'deploy', not 'dev'

# 4. Run data integrity checks
npx prisma db seed --skip-generate  # If needed

# 5. Test application functionality
# - Test core features
# - Verify performance
# - Check error logs

# 6. Resume normal operations
```

### Monitoring Post-Migration

```bash
# Monitor database performance
SELECT * FROM pg_stat_statements
  ORDER BY mean_exec_time DESC
  LIMIT 10;

# Monitor table sizes
SELECT schemaname, tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename))
FROM pg_tables WHERE schemaname != 'pg_catalog'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

# Check for errors in application logs
tail -f /var/log/application.log
```

---

## Troubleshooting

### Issue 1: Migration Fails - Foreign Key Constraint

**Error:**
```
ERROR: insert or update on table "Note" violates foreign key constraint
```

**Solution:**
1. Check if referenced user/course exists
2. Modify migration to add data in correct order
3. Use transactions to ensure atomicity

### Issue 2: Seed Script Fails - Duplicate Key

**Error:**
```
Unique constraint failed on the fields: (email)
```

**Solution:**
1. Use `upsert` instead of `create`
2. Check for existing data before creating
3. Use `where` clause to identify existing records

### Issue 3: Database Won't Start in Docker

**Solution:**
```bash
# Check logs
docker-compose logs db

# Restart container
docker-compose down db
docker-compose up -d db

# Wait for health check
sleep 10

# Verify connection
psql postgresql://postgres:postgres@localhost:5432/campusnotes
```

### Issue 4: Prisma Client Out of Sync

**Error:**
```
Type 'User' not found in Prisma Client generated types
```

**Solution:**
```bash
# Regenerate Prisma Client
npm run db:generate

# Or during migration
npx prisma migrate dev --name fix
```

### Issue 5: Migration Conflicts in Team

**Scenario:** Two developers create conflicting migrations

**Solution:**
```bash
# Resolve conflicts by creating merge migration
npx prisma migrate resolve --rolled-back <conflicting_migration>

# Update your schema to include both changes
# Create new combined migration
npx prisma migrate dev --name merge_migrations

# Push to shared repo
git add prisma/migrations/
git commit -m "Merge migration: combined feature A and B"
```

---

## Command Reference

| Command | Purpose | Environment |
|---------|---------|-------------|
| `npx prisma migrate dev` | Create and apply migration | Development |
| `npx prisma migrate deploy` | Apply pending migrations | Production |
| `npx prisma migrate status` | Check migration history | All |
| `npx prisma migrate reset` | Reset and reseed database | Development only |
| `npx prisma db seed` | Run seed script only | All |
| `npm run db:generate` | Regenerate Prisma Client | All |
| `npm run db:studio` | Open Prisma Studio GUI | All |
| `npm run db:migrate` | Create new migration | Development |
| `npm run db:reset` | Full reset (dev only) | Development |

---

## Best Practices Summary

✅ **DO:**
- Keep migrations small and focused
- Test migrations locally first
- Use `upsert` for idempotent seeding
- Create backups before production migrations
- Document migration purposes
- Version control migration files
- Monitor performance post-migration

❌ **DON'T:**
- Edit applied migrations (create new one instead)
- Use `migrate reset` in production
- Hardcode sensitive data in seeds
- Skip testing migrations
- Rush production deployments
- Ignore monitoring after changes
- Deploy without rollback plan

---

## References

- [Prisma Migrations Documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Prisma Studio Guide](https://www.prisma.io/docs/concepts/components/prisma-studio)
- [Database Connection Management](https://www.prisma.io/docs/reference/api-reference/connection-management)

---

**Last Updated:** January 22, 2026
**Status:** Complete and Production-Ready
