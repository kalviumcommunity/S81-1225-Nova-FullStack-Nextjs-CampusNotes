# Quick Start Guide - Docker Setup

## Prerequisites
✅ Docker Desktop installed and running
✅ Git repository cloned
✅ Terminal/PowerShell open

## First Time Setup

1. **Navigate to project directory**
   ```bash
   cd notes
   ```

2. **Create environment file** (Optional - uses defaults if skipped)
   ```bash
   cp .env.example .env
   ```

3. **Start all services**
   ```bash
   docker-compose up --build
   ```

   This will:
   - Build the Next.js app (takes 3-5 minutes first time)
   - Pull PostgreSQL and Redis images
   - Start all three containers
   - Show live logs

## Verification Commands

After services start, verify in a **new terminal**:

```bash
# Check all containers are running
docker ps

# Expected output:
# campusnotes-app    ✅ Up
# campusnotes-db     ✅ Up
# campusnotes-redis  ✅ Up
```

## Access Your Application

- **Web App**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## Common Commands

### View logs
```bash
docker-compose logs -f        # All services
docker-compose logs -f app    # App only
docker-compose logs -f db     # Database only
```

### Stop services
```bash
docker-compose down           # Stop containers (keeps data)
docker-compose down -v        # Stop + delete data volumes
```

### Restart services
```bash
docker-compose restart        # Quick restart
docker-compose up -d          # Start in background
```

### Rebuild after code changes
```bash
docker-compose up --build
```

## Test Database Connection

```bash
# Connect to PostgreSQL
docker exec -it campusnotes-db psql -U postgres -d campusnotes

# Inside PostgreSQL shell:
\l                    # List databases
\dt                   # List tables
\q                    # Exit
```

## Test Redis Connection

```bash
# Connect to Redis
docker exec -it campusnotes-redis redis-cli -a redis

# Inside Redis shell:
PING                  # Should return PONG
SET test "hello"      # Set a key
GET test              # Get the key
exit                  # Exit
```

## Troubleshooting

### Port conflict (3000 already in use)
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process or change port in docker-compose.yml
```

### Build cache issues
```bash
# Clear cache and rebuild
docker-compose build --no-cache
docker-compose up
```

### Permission denied
- Run PowerShell/Terminal as Administrator
- Ensure Docker Desktop is running

### Database not ready
```bash
# Check database logs
docker-compose logs db

# Look for: "database system is ready to accept connections"
```

## For Your Video Demo

Record these steps:
1. Show Dockerfile and docker-compose.yml files
2. Run: `docker-compose up --build`
3. Show: `docker ps` output
4. Open: http://localhost:3000 in browser
5. Test database: `docker exec -it campusnotes-db psql -U postgres -d campusnotes`
6. Test Redis: `docker exec -it campusnotes-redis redis-cli -a redis`
7. Explain the onboarding benefit

## Creative Reflection (for video)

**Question**: "If your entire team had to onboard a new developer tomorrow, how would Docker Compose make that process faster and smoother?"

**Sample Answer**:
"Docker Compose transforms onboarding from a multi-day setup nightmare into a 5-minute process. Instead of a new developer spending hours installing Node.js, PostgreSQL, Redis, dealing with version conflicts, environment variable confusion, and platform-specific issues, they literally just clone the repo and run `docker-compose up`. That's it. They get an identical development environment to everyone else on the team, regardless of whether they're on Windows, Mac, or Linux. No 'it works on my machine' excuses, no troubleshooting setup issues, and they can start coding immediately. This saves the team days of setup time and eliminates the most frustrating part of joining a new project."

## Next Steps After Setup

1. ✅ Verify all containers running
2. ✅ Test app at localhost:3000
3. ✅ Capture screenshots for README
4. ✅ Record video demo
5. ✅ Submit PR with video link

---

**Need Help?** Check the full README.md for detailed explanations and troubleshooting.
