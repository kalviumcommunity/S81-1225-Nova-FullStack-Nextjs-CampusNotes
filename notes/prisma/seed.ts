import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Clear existing data
  await prisma.sharedNote.deleteMany();
  await prisma.noteTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.note.deleteMany();
  await prisma.folder.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.user.deleteMany();

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      password: "hashed_password_123",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane@example.com",
      password: "hashed_password_456",
    },
  });

  // Create Subjects
  const subject1 = await prisma.subject.create({
    data: {
      name: "Data Structures",
      userId: user1.id,
    },
  });

  const subject2 = await prisma.subject.create({
    data: {
      name: "Calculus I",
      userId: user1.id,
    },
  });

  // Create Folders
  const folder1 = await prisma.folder.create({
    data: {
      name: "Trees & Graphs",
      subjectId: subject1.id,
    },
  });

  const folder2 = await prisma.folder.create({
    data: {
      name: "Derivatives",
      subjectId: subject2.id,
    },
  });

  // Create Tags
  const tag1 = await prisma.tag.create({ data: { name: "important" } });
  const tag2 = await prisma.tag.create({ data: { name: "exam-prep" } });
  const tag3 = await prisma.tag.create({ data: { name: "assignment" } });

  // Create Notes
  const note1 = await prisma.note.create({
    data: {
      title: "Binary Search Trees",
      content:
        "Binary Search Tree (BST) is a node-based binary tree data structure...",
      userId: user1.id,
      subjectId: subject1.id,
      folderId: folder1.id,
    },
  });

  const note2 = await prisma.note.create({
    data: {
      title: "Power Rule in Calculus",
      content:
        "The power rule states that the derivative of x^n is nx^(n-1)...",
      userId: user1.id,
      subjectId: subject2.id,
      folderId: folder2.id,
    },
  });

  // Add Tags to Notes
  await prisma.noteTag.createMany({
    data: [
      { noteId: note1.id, tagId: tag1.id },
      { noteId: note1.id, tagId: tag2.id },
      { noteId: note2.id, tagId: tag2.id },
    ],
  });

  // Share Note
  await prisma.sharedNote.create({
    data: {
      noteId: note1.id,
      userId: user2.id,
    },
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
