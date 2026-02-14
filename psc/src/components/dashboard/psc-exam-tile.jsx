import { useNavigate } from "react-router-dom";

export function PscExamTile({ title, examId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (examId === "ldc") {
      navigate(`/exam/ldc`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer flex items-center justify-center min-h-[120px]"
    >
      <h3 className="text-lg font-bold text-foreground text-center line-clamp-3">
        {title}
      </h3>
    </div>
  );
}
