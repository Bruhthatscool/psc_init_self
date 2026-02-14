import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { exams } from "@/data/exams";
import { SubjectTile } from "./subject-tile";
import { MaterialModal } from "./material-modal";
import { QuestionPaperSection } from "./question-paper-section";
import { QuizSection } from "./quiz-tile";

export function ExamPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState(null);

  const exam = exams.find((e) => e.id === id);

  if (!exam) {
    return (
      <div className="min-h-screen bg-linear-to-br from-background to-background/95 p-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Exam Not Found
          </h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-background/95 p-4 md:p-6">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Header */}
        <div className="bg-card/60 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {exam.title}
            </h1>
            <p className="text-lg text-muted-foreground">{exam.description}</p>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            Study Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {exam.subjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer flex items-center justify-center min-h-32"
                onClick={() => setSelectedSubject(subject)}
              >
                {/* render the existing SubjectTile inside a smaller wrapper so tiles match upcoming-exams sizing */}
                <SubjectTile subject={subject} onOpen={setSelectedSubject} />
              </div>
            ))}
          </div>
        </div>

        {/* Question Papers Section */}
        <QuestionPaperSection papers={exam.questionPapers} examId={exam.id} />

        {/* Quiz Section */}
        <QuizSection quizzes={exam.quizzes} examId={exam.id} />
      </div>

      {/* Material Modal */}
      {selectedSubject && (
        <MaterialModal
          subject={selectedSubject}
          onClose={() => setSelectedSubject(null)}
        />
      )}
    </div>
  );
}
