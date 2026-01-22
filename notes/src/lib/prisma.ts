import { PrismaClient } from '@prisma/client';

// Ensure a single instance of Prisma Client across the application
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

// Reuse the Prisma Client instance during development to avoid creating multiple connections
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
