```
CAMPUS NOTES - DATABASE SCHEMA VISUALIZATION
============================================

┌────────────────────────────────────────────────────────────────────────┐
│                          AUTHENTICATION LAYER                          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ USER                                                         │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK, autoincrement)                                │    │
│  │ • email: String (@unique)                                   │    │
│  │ • name: String                                               │    │
│  │ • password: String (hashed)                                  │    │
│  │ • avatar: String? (optional)                                 │    │
│  │ • createdAt: DateTime (@default now())                       │    │
│  │ • updatedAt: DateTime (@updatedAt)                           │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ courses: CourseEnrollment[]                              │    │
│  │ ├─→ notes: Note[]                                            │    │
│  │ ├─→ folders: Folder[]                                        │    │
│  │ └─→ tags: Tag[]                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│                          ACADEMIC STRUCTURE                            │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ COURSE                                                       │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK, autoincrement)                                │    │
│  │ • title: String (e.g., "Advanced Database Design")           │    │
│  │ • code: String (@unique, e.g., "CS301")                      │    │
│  │ • description: String? (optional)                            │    │
│  │ • createdAt: DateTime                                         │    │
│  │ • updatedAt: DateTime                                         │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ enrollments: CourseEnrollment[] (users enrolled)         │    │
│  │ └─→ notes: Note[] (course-specific notes)                    │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
│                            ↓ Many-to-Many ↓                          │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ COURSE_ENROLLMENT (Junction Table)                           │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK)                                               │    │
│  │ • userId: Int (FK → User)                                    │    │
│  │ • courseId: Int (FK → Course)                                │    │
│  │ • enrolledAt: DateTime                                        │    │
│  │ • @@unique([userId, courseId])                               │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ user: User                                               │    │
│  │ └─→ course: Course                                           │    │
│  │ • onDelete: Cascade (clean up enrollments when deleted)      │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│                         NOTE ORGANIZATION                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ FOLDER (Hierarchical Organization)                          │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK)                                               │    │
│  │ • name: String                                               │    │
│  │ • userId: Int (FK → User)                                    │    │
│  │ • createdAt: DateTime                                         │    │
│  │ • updatedAt: DateTime                                         │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ user: User                                               │    │
│  │ └─→ notes: Note[]                                            │    │
│  │ • onDelete: Cascade                                          │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ NOTE (Core Content)                                          │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK)                                               │    │
│  │ • title: String                                              │    │
│  │ • content: String (Markdown, HTML, or plain text)            │    │
│  │ • userId: Int (FK → User)                                    │    │
│  │ • courseId: Int (FK → Course)                                │    │
│  │ • folderId: Int? (FK → Folder, optional)                     │    │
│  │ • isPinned: Boolean (@default false)                         │    │
│  │ • createdAt: DateTime                                         │    │
│  │ • updatedAt: DateTime                                         │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ user: User (owner)                                       │    │
│  │ ├─→ course: Course (subject context)                         │    │
│  │ ├─→ folder: Folder? (optional organization)                  │    │
│  │ └─→ tags: TagOnNote[] (many-to-many tags)                    │    │
│  │ • All onDelete: Cascade                                      │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│                        TAGGING & CATEGORIZATION                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ TAG (User-Specific Tags)                                     │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK)                                               │    │
│  │ • name: String (e.g., "Important", "Review Later")           │    │
│  │ • userId: Int (FK → User)                                    │    │
│  │ • createdAt: DateTime                                         │    │
│  │ • @@unique([userId, name])                                   │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ user: User (owner of custom tags)                        │    │
│  │ └─→ notes: TagOnNote[]                                       │    │
│  │ • onDelete: Cascade                                          │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
│                            ↓ Many-to-Many ↓                          │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ TAG_ON_NOTE (Junction Table)                                 │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │ • id: Int (PK)                                               │    │
│  │ • noteId: Int (FK → Note)                                    │    │
│  │ • tagId: Int (FK → Tag)                                      │    │
│  │ • @@unique([noteId, tagId])                                  │    │
│  │                                                              │    │
│  │ Relations:                                                   │    │
│  │ ├─→ note: Note                                               │    │
│  │ └─→ tag: Tag                                                 │    │
│  │ • onDelete: Cascade                                          │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

DATA INTEGRITY RULES
====================

1. UNIQUE CONSTRAINTS:
   • User.email → One email per user
   • Course.code → One code per course (e.g., "CS301")
   • CourseEnrollment.(userId, courseId) → User enrolled in each course once
   • Tag.(userId, name) → User has unique tag names

2. CASCADE DELETE RULES:
   ✓ Delete User → Delete Notes, Folders, Tags, CourseEnrollments
   ✓ Delete Course → Delete CourseEnrollments and Course-specific Notes
   ✓ Delete Note → Delete TagOnNote associations
   ✓ Delete Folder → Set Note.folderId to NULL (SetNull policy)
   ✓ Delete Tag → Delete TagOnNote associations

3. FOREIGN KEY CONSTRAINTS:
   • Note.userId must reference valid User.id
   • Note.courseId must reference valid Course.id
   • Note.folderId may be NULL or reference valid Folder.id
   • All references prevent orphaned records

QUERY EXAMPLES
==============

1. GET USER WITH ALL NOTES AND COURSES:
   prisma.user.findUnique({
     where: { id: userId },
     include: {
       notes: { include: { course: true, tags: true } },
       courses: { include: { course: true } },
       folders: { include: { notes: true } },
       tags: true
     }
   })

2. GET COURSE WITH ALL ENROLLED USERS:
   prisma.course.findUnique({
     where: { id: courseId },
     include: {
       enrollments: { include: { user: true } },
       notes: { include: { user: true, tags: true } }
     }
   })

3. FIND NOTES BY TAG:
   prisma.note.findMany({
     where: {
       tags: {
         some: { tag: { name: "Important" } }
       }
     },
     include: { course: true, user: true }
   })

4. GET USER'S NOTES IN A SPECIFIC COURSE:
   prisma.note.findMany({
     where: {
       userId: userId,
       courseId: courseId
     },
     orderBy: { updatedAt: 'desc' }
   })

PERFORMANCE CONSIDERATIONS
===========================

• Indexed fields: id, userId, courseId, folderId (auto-indexed by relations)
• Unique constraints also create indexes for fast lookups
• Use include/select to optimize queries (prevent N+1 queries)
• Pagination recommended for large result sets
• Consider materialized views for complex analytics queries

SCALING NOTES
=============

• Current schema supports 100K+ users efficiently
• Use database replication for read-heavy operations
• Implement caching layer (Redis) for frequently accessed data
• Archive old notes to separate table for performance
• Use Prisma Accelerate for connection pooling at scale
```

This schema provides:
✅ Type safety through Prisma's TypeScript generation
✅ Data integrity through foreign key constraints
✅ User privacy through tag ownership
✅ Flexible organization through folders
✅ Course association for academic context
✅ Scalability through proper indexing
