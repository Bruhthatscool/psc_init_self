import { useState } from "react";

export function QuestionPaperSection({ papers, examId }) {
  const [selectedYear, setSelectedYear] = useState(
    Object.keys(papers).sort((a, b) => b - a)[0],
  );

  const years = Object.keys(papers).sort((a, b) => b - a);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground">Question Papers</h3>

      <div className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Select Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            {papers[selectedYear].map((paper, index) => {
              const handleClick = () => {
                // Open LDC 2021 question paper link when appropriate
                if (examId === "ldc" && String(selectedYear) === "2021") {
                  const url =
                    "https://drive.google.com/uc?export=download&id=1Fpjuv-PCuYqKr6ZTqTbz_SG8uHrmBB2p";
                  window.open(url, "_blank", "noopener,noreferrer");
                  return;
                }

                // Default: no-op (could be extended to download other papers)
              };

              return (
                <div
                  key={index}
                  onClick={handleClick}
                  className="bg-background/50 backdrop-blur-sm rounded-lg p-4 hover:bg-background/80 transition-colors cursor-pointer border border-border/30 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-foreground">{paper}</h4>
                    <p className="text-sm text-muted-foreground">
                      Year {selectedYear}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
