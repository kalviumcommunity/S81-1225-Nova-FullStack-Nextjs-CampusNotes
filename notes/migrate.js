const { spawnSync } = require("child_process");
const path = require("path");

const url = "postgresql://postgres:password@localhost:5432/mydb?schema=public";
process.env.DATABASE_URL = url;

console.log(`Running Prisma migrate with DATABASE_URL=${url}`);

const result = spawnSync(
  "npx",
  ["prisma", "migrate", "dev", "--name", "init_schema"],
  {
    stdio: "inherit",
    shell: true,
    cwd: __dirname,
  }
);

if (result.status !== 0) {
  console.error("Prisma migrate failed");
  process.exit(result.status || 1);
}

console.log("Prisma migrate succeeded");
