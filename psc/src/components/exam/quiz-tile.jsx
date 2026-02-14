import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

export function QuizSection({ quizzes, examId }) {
  const navigate = useNavigate();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Sample questions used when quiz data doesn't include questions
  const sampleQuestions = [
    {
      id: 1,
      q: "What is the capital of Kerala?",
      options: ["Kozhikode", "Kochi", "Thiruvananthapuram", "Thrissur"],
      answer: 2,
    },
    {
      id: 2,
      q: "Which river is the longest in Kerala?",
      options: ["Periyar", "Bharathapuzha", "Pamba", "Chaliyar"],
      answer: 1,
    },
    {
      id: 3,
      q: "Who is known as the 'Father of the Indian Constitution'?",
      options: [
        "Jawaharlal Nehru",
        "B.R. Ambedkar",
        "Sardar Patel",
        "Mahatma Gandhi",
      ],
      answer: 1,
    },
    {
      id: 4,
      q: "What is the symbol of the Indian National Emblem?",
      options: ["Tiger", "Lion Capital of Ashoka", "Peacock", "Elephant"],
      answer: 1,
    },
    {
      id: 5,
      q: "Which is the largest city in Kerala by population?",
      options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Kannur"],
      answer: 0,
    },
  ];

  const handleStartQuiz = (quiz) => {
    setActiveQuiz(quiz);
    // Use quiz.questions if present, otherwise fallback to sampleQuestions
    setQuestions(
      quiz.questions && quiz.questions.length
        ? quiz.questions
        : sampleQuestions,
    );
    setCurrentIndex(0);
    setAnswers(
      Array(
        (quiz.questions && quiz.questions.length) || sampleQuestions.length,
      ).fill(null),
    );
    setShowResult(false);
    setScore(0);
  };

  const submitQuiz = (auto = false) => {
    // Calculate score
    let s = 0;
    const wrong = [];
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s += 1;
      else wrong.push({ question: q, selected: answers[i] });
    });
    setScore(s);
    setShowResult(true);
    // stop quiz UI but keep activeQuiz so we can show result modal
  };

  const handleTimeUp = () => {
    submitQuiz(true);
  };

  const handleSelectOption = (index) => (optionIndex) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = optionIndex;
      return copy;
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleExitQuiz = () => {
    setActiveQuiz(null);
    setQuestions([]);
    setAnswers([]);
    setShowResult(false);
  };

  const handleBackToExam = () => {
    // close quiz modal state then navigate back to the exam page
    handleExitQuiz();
    navigate(`/exam/${examId}`);
  };

  useEffect(() => {
    // reset state when quiz closed
    if (!activeQuiz) {
      setQuestions([]);
      setAnswers([]);
      setShowResult(false);
      setScore(0);
    }
  }, [activeQuiz]);

  if (activeQuiz) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
        <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-2xl p-6 shadow-2xl max-w-3xl w-full">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {activeQuiz.title}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Complete the quiz within the time limit
                </p>
              </div>
              {!showResult && (
                <Timer duration={activeQuiz.duration} onTimeUp={handleTimeUp} />
              )}
            </div>

            {!showResult && (
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 min-h-40">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-muted-foreground font-medium">
                      Q {currentIndex + 1}.
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {questions[currentIndex].q}
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-3">
                        {questions[currentIndex].options.map((opt, oi) => (
                          <button
                            key={oi}
                            onClick={() => handleSelectOption(currentIndex)(oi)}
                            className={`text-left w-full px-3 py-2 rounded-lg border transition-colors ${answers[currentIndex] === oi ? "bg-primary text-primary-foreground border-primary" : "bg-background/30 border-border/20"}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showResult ? (
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <h3 className="text-xl font-bold">Result</h3>
                  <p className="text-muted-foreground">
                    You scored {score} / {questions.length}
                  </p>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {questions.map((q, i) => (
                    <div
                      key={q.id}
                      className={`p-3 rounded-lg ${answers[i] === q.answer ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                    >
                      <div className="font-semibold">
                        {i + 1}. {q.q}
                      </div>
                      <div className="mt-1 text-sm">
                        <div>
                          Your answer:{" "}
                          {answers[i] !== null ? q.options[answers[i]] : "—"}
                        </div>
                        <div>Correct answer: {q.options[q.answer]}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleBackToExam}
                    className="flex-1 px-4 py-3 bg-background/50 border border-border/50 text-foreground hover:bg-background/80 font-medium rounded-lg transition-all duration-200"
                  >
                    Back to Exam
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleExitQuiz}
                  className="flex-1 px-4 py-3 bg-background/50 border border-border/50 text-foreground hover:bg-background/80 font-medium rounded-lg transition-all duration-200"
                >
                  Exit Quiz
                </button>
                <button
                  onClick={() => submitQuiz(false)}
                  className="flex-1 px-4 py-3 bg-gradient-to-t from-green-600 via-green-500 to-green-400 hover:from-green-700 hover:via-green-600 hover:to-green-500 text-white font-medium rounded-lg transition-all duration-200"
                >
                  Submit Quiz
                </button>
              </div>
            )}

            {!showResult && (
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="px-3 py-2 bg-card/60 rounded-lg"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex >= questions.length - 1}
                    className="px-3 py-2 bg-card/60 rounded-lg"
                  >
                    Next
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {questions.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground">
        Mock Tests & Quizzes
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <QuizTile key={quiz.id} quiz={quiz} onStart={handleStartQuiz} />
        ))}
      </div>
    </div>
  );
}
