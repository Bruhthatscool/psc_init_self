import { useState } from "react";
import { Timer } from "./timer";

export function QuizTile({ quiz, onStart }) {
  return (
    <div className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground">{quiz.title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">
              {Math.floor(quiz.duration / 60)} min
            </span>
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            {quiz.duration}s
          </span>
        </div>

        <button
          onClick={() => onStart(quiz)}
          className="w-full px-4 py-2 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 group-hover:shadow-lg"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export function QuizSection({ quizzes }) {
  const [activeQuiz, setActiveQuiz] = useState(null);

  const handleStartQuiz = (quiz) => {
    setActiveQuiz(quiz);
  };

  const handleTimeUp = () => {
    alert("Time's up! Quiz ended.");
    setActiveQuiz(null);
  };

  const handleExitQuiz = () => {
    setActiveQuiz(null);
  };

  if (activeQuiz) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
        <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-2xl p-8 shadow-2xl max-w-2xl w-full">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  {activeQuiz.title}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Complete the quiz within the time limit
                </p>
              </div>
              <Timer duration={activeQuiz.duration} onTimeUp={handleTimeUp} />
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 min-h-40 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Quiz content would be displayed here...
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleExitQuiz}
                className="flex-1 px-4 py-3 bg-background/50 border border-border/50 text-foreground hover:bg-background/80 font-medium rounded-lg transition-all duration-200"
              >
                Exit Quiz
              </button>
              <button
                onClick={handleExitQuiz}
                className="flex-1 px-4 py-3 bg-gradient-to-t from-green-600 via-green-500 to-green-400 hover:from-green-700 hover:via-green-600 hover:to-green-500 text-white font-medium rounded-lg transition-all duration-200"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground">Mock Tests & Quizzes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <QuizTile key={quiz.id} quiz={quiz} onStart={handleStartQuiz} />
        ))}
      </div>
    </div>
  );
}
