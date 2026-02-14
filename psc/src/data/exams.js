export const exams = [
  {
    id: "ldc",
    title: "Lower Division Clerk (LDC)",
    description: "Prepare for the Lower Division Clerk examination",
    subjects: [
      {
        id: 1,
        name: "General Knowledge",
        materials: [
          { id: 1, title: "Indian Constitution Notes", type: "PDF" },
          { id: 2, title: "Kerala History Summary", type: "PDF" },
          { id: 3, title: "Current Affairs 2024-2025", type: "PDF" },
          { id: 4, title: "Important Dates and Events", type: "PDF" },
        ],
      },
      {
        id: 2,
        name: "English",
        materials: [
          { id: 5, title: "Grammar Basics", type: "PDF" },
          { id: 6, title: "Previous English Questions", type: "PDF" },
          { id: 7, title: "Vocabulary Building Guide", type: "PDF" },
          { id: 8, title: "Reading Comprehension Tips", type: "PDF" },
        ],
      },
      {
        id: 3,
        name: "Mathematics",
        materials: [
          { id: 9, title: "Arithmetic Fundamentals", type: "PDF" },
          { id: 10, title: "Mensuration Formulas", type: "PDF" },
          { id: 11, title: "Algebra Concepts", type: "PDF" },
          { id: 12, title: "Previous Math Papers", type: "PDF" },
        ],
      },
      {
        id: 4,
        name: "Reasoning",
        materials: [
          { id: 13, title: "Logical Reasoning Guide", type: "PDF" },
          { id: 14, title: "Analogy Practice Questions", type: "PDF" },
          { id: 15, title: "Series and Patterns", type: "PDF" },
          { id: 16, title: "Verbal Reasoning Tips", type: "PDF" },
        ],
      },
    ],
    questionPapers: {
      2023: ["Paper 1 (Morning)", "Paper 2 (Evening)"],
      2022: ["Paper 1"],
      2021: ["Paper 1", "Paper 2"],
      2020: ["Paper 1"],
    },
    quizzes: [
      { id: 1, title: "GK Practice Test 1", duration: 300 },
      { id: 2, title: "English Mock Quiz", duration: 600 },
      { id: 3, title: "Mathematics Speed Test", duration: 900 },
      { id: 4, title: "Reasoning Challenge", duration: 450 },
      { id: 5, title: "Full Syllabus Mock Test", duration: 1800 },
    ],
  },
];
