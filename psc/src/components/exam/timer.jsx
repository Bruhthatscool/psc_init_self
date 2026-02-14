export function Timer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = React.useState(duration);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft <= 60;

  return (
    <div
      className={`flex items-center justify-center w-20 h-20 rounded-full font-bold text-2xl ${
        isWarning
          ? "bg-red-100 text-red-600 animate-pulse"
          : "bg-card/60 backdrop-blur-md text-foreground"
      }`}
    >
      {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
