import { prisma } from '@/lib/prisma';

/**
 * Test function to verify Prisma connection to PostgreSQL
 * Run this with: npm run dev
 */
export async function testDatabaseConnection() {
  try {
    console.log('🔍 Testing database connection...');
    
    // Test the connection by querying users
    const users = await prisma.user.findMany();
    console.log('✅ Database connection successful!');
    console.log(`📊 Total users in database: ${users.length}`);
    
    return users;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

/**
 * Example query: Get all courses
 */
export async function getAllCourses() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        enrollments: true,
        notes: true,
      },
    });
    console.log('📚 Courses fetched:', courses);
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

/**
 * Example query: Get user with their notes and courses
 */
export async function getUserWithNotesAndCourses(userId: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        notes: {
          include: {
            course: true,
            tags: {
              include: { tag: true },
            },
          },
        },
        courses: {
          include: { course: true },
        },
      },
    });
    console.log('👤 User data:', user);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
