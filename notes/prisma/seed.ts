import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...\n');

  try {
    // Create sample users
    console.log('👤 Creating users...');
    const alice = await prisma.user.upsert({
      where: { email: 'alice@campusnotes.com' },
      update: {},
      create: {
        email: 'alice@campusnotes.com',
        name: 'Alice Johnson',
        password: 'hashed_password_123',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
      },
    });

    const bob = await prisma.user.upsert({
      where: { email: 'bob@campusnotes.com' },
      update: {},
      create: {
        email: 'bob@campusnotes.com',
        name: 'Bob Smith',
        password: 'hashed_password_456',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
      },
    });

    const charlie = await prisma.user.upsert({
      where: { email: 'charlie@campusnotes.com' },
      update: {},
      create: {
        email: 'charlie@campusnotes.com',
        name: 'Charlie Brown',
        password: 'hashed_password_789',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
      },
    });

    console.log(`✅ Created/Updated ${[alice, bob, charlie].length} users\n`);

    // Create sample courses
    console.log('📚 Creating courses...');
    const csAlgorithms = await prisma.course.upsert({
      where: { code: 'CS101' },
      update: {},
      create: {
        code: 'CS101',
        title: 'Introduction to Algorithms',
        description: 'Comprehensive study of algorithm design and analysis',
      },
    });

    const csDatabase = await prisma.course.upsert({
      where: { code: 'CS201' },
      update: {},
      create: {
        code: 'CS201',
        title: 'Database Systems',
        description: 'Learn relational databases, SQL, and advanced database concepts',
      },
    });

    const webDev = await prisma.course.upsert({
      where: { code: 'WEB101' },
      update: {},
      create: {
        code: 'WEB101',
        title: 'Full Stack Web Development',
        description: 'Modern web technologies including React, Node.js, and databases',
      },
    });

    console.log(`✅ Created/Updated ${[csAlgorithms, csDatabase, webDev].length} courses\n`);

    // Create course enrollments
    console.log('📝 Creating course enrollments...');
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

    await prisma.courseEnrollment.upsert({
      where: {
        userId_courseId: { userId: alice.id, courseId: csDatabase.id },
      },
      update: {},
      create: {
        userId: alice.id,
        courseId: csDatabase.id,
      },
    });

    await prisma.courseEnrollment.upsert({
      where: {
        userId_courseId: { userId: bob.id, courseId: webDev.id },
      },
      update: {},
      create: {
        userId: bob.id,
        courseId: webDev.id,
      },
    });

    await prisma.courseEnrollment.upsert({
      where: {
        userId_courseId: { userId: charlie.id, courseId: csDatabase.id },
      },
      update: {},
      create: {
        userId: charlie.id,
        courseId: csDatabase.id,
      },
    });

    console.log('✅ Created/Updated 4 course enrollments\n');

    // Create folders
    console.log('📁 Creating folders...');
    const aliceAlgoFolder = await prisma.folder.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Algorithm Concepts',
        userId: alice.id,
      },
    });

    const aliceDbFolder = await prisma.folder.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Database Design',
        userId: alice.id,
      },
    });

    const bobWebFolder = await prisma.folder.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'Web Dev Projects',
        userId: bob.id,
      },
    });

    console.log('✅ Created/Updated 3 folders\n');

    // Create tags
    console.log('🏷️  Creating tags...');
    const importantTag = await prisma.tag.upsert({
      where: {
        userId_name: { userId: alice.id, name: 'Important' },
      },
      update: {},
      create: {
        name: 'Important',
        userId: alice.id,
      },
    });

    const reviewTag = await prisma.tag.upsert({
      where: {
        userId_name: { userId: alice.id, name: 'Review Later' },
      },
      update: {},
      create: {
        name: 'Review Later',
        userId: alice.id,
      },
    });

    const urgentTag = await prisma.tag.upsert({
      where: {
        userId_name: { userId: bob.id, name: 'Urgent' },
      },
      update: {},
      create: {
        name: 'Urgent',
        userId: bob.id,
      },
    });

    console.log('✅ Created/Updated 3 tags\n');

    // Create notes
    console.log('📖 Creating notes...');
    const note1 = await prisma.note.upsert({
      where: { id: 1 },
      update: {},
      create: {
        title: 'Big O Notation Explained',
        content: `# Big O Notation

Big O notation is a mathematical notation used in computer science to describe the performance of an algorithm.

## Common Complexities
- O(1) - Constant time
- O(n) - Linear time
- O(n²) - Quadratic time
- O(log n) - Logarithmic time
- O(n log n) - Linearithmic time

## Examples
- Array lookup: O(1)
- Linear search: O(n)
- Binary search: O(log n)
- Bubble sort: O(n²)`,
        userId: alice.id,
        courseId: csAlgorithms.id,
        folderId: aliceAlgoFolder.id,
        isPinned: true,
      },
    });

    const note2 = await prisma.note.upsert({
      where: { id: 2 },
      update: {},
      create: {
        title: 'ACID Properties in Databases',
        content: `# ACID Properties

ACID is a set of properties that guarantee reliable database transactions.

## Atomicity
- Transaction is all or nothing
- Either all changes are saved or none

## Consistency
- Database moves from one valid state to another
- Data integrity constraints are maintained

## Isolation
- Concurrent transactions don't interfere with each other
- Prevents dirty reads and race conditions

## Durability
- Once committed, data survives system failures
- Stored in stable storage`,
        userId: alice.id,
        courseId: csDatabase.id,
        folderId: aliceDbFolder.id,
      },
    });

    const note3 = await prisma.note.upsert({
      where: { id: 3 },
      update: {},
      create: {
        title: 'React Hooks Tutorial',
        content: `# React Hooks

Hooks allow you to use state and other React features without writing a class component.

## useState Hook
Used to add state to functional components.

## useEffect Hook
Used to perform side effects in functional components.`,
        userId: bob.id,
        courseId: webDev.id,
        folderId: bobWebFolder.id,
        isPinned: true,
      },
    });

    const note4 = await prisma.note.upsert({
      where: { id: 4 },
      update: {},
      create: {
        title: 'SQL JOIN Operations',
        content: `# SQL JOINs

Different types of JOINs in SQL:

## INNER JOIN
Returns only matching rows from both tables

## LEFT JOIN
Returns all rows from left table and matching rows from right`,
        userId: charlie.id,
        courseId: csDatabase.id,
      },
    });

    console.log(`✅ Created/Updated ${[note1, note2, note3, note4].length} notes\n`);

    // Create tag associations
    console.log('🔗 Creating note-tag associations...');
    await prisma.tagOnNote.upsert({
      where: { id: 1 },
      update: {},
      create: {
        noteId: note1.id,
        tagId: importantTag.id,
      },
    });

    await prisma.tagOnNote.upsert({
      where: { id: 2 },
      update: {},
      create: {
        noteId: note2.id,
        tagId: importantTag.id,
      },
    });

    await prisma.tagOnNote.upsert({
      where: { id: 3 },
      update: {},
      create: {
        noteId: note2.id,
        tagId: reviewTag.id,
      },
    });

    await prisma.tagOnNote.upsert({
      where: { id: 4 },
      update: {},
      create: {
        noteId: note3.id,
        tagId: urgentTag.id,
      },
    });

    console.log('✅ Created/Updated 4 note-tag associations\n');

    // Summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('✨ Database seeding completed successfully! ✨');
    console.log('═══════════════════════════════════════════════════════');
    console.log('\n📊 Seeded Data Summary:');
    console.log(`   • Users: 3`);
    console.log(`   • Courses: 3`);
    console.log(`   • Course Enrollments: 4`);
    console.log(`   • Folders: 3`);
    console.log(`   • Notes: 4`);
    console.log(`   • Tags: 3`);
    console.log(`   • Note-Tag Associations: 4`);
    console.log('\n💡 Pro Tip: Run "npm run db:studio" to view the data in Prisma Studio!\n');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  }
}

main()
  .then(async () => {
    console.log('🎉 Seed script executed successfully!');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('💥 Seed script failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
