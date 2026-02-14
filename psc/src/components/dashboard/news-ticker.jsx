import { useState } from "react";

export function NewsTicker() {
  const [isPaused, setIsPaused] = useState(false);

  const notifications = [
    "LDC Exam Notification 2026 Released",
    "Assistant Professor Rank List Published",
    "Police Constable Physical Test Schedule Updated",
    "Village Field Assistant Shortlist Announced",
  ];

  const handleTickerClick = () => {
    window.open("https://www.keralapsc.gov.in", "_blank");
  };

  return (
    <div
      className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-4 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={handleTickerClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          Latest Updates
        </span>
      </div>

      <div className="overflow-hidden">
        <div
          className={`flex gap-8 ${isPaused ? "" : "animate-scroll"}`}
          style={{
            animation: isPaused ? "none" : "scroll 30s linear infinite",
          }}
        >
          {/* First set of notifications */}
          {notifications.map((notification, index) => (
            <span
              key={index}
              className="flex-shrink-0 text-foreground font-medium whitespace-nowrap"
            >
              • {notification}
            </span>
          ))}

          {/* Duplicate set for seamless loop */}
          {notifications.map((notification, index) => (
            <span
              key={`dup-${index}`}
              className="flex-shrink-0 text-foreground font-medium whitespace-nowrap"
            >
              • {notification}
            </span>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-3">
        Click to visit official website
      </p>
    </div>
  );
}
