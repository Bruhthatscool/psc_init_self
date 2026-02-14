import { useState } from "react";

export function MaterialModal({ subject, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useState(() => {
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-2xl p-8 shadow-2xl max-w-2xl w-full max-h-[70vh] overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground">{subject.name}</h2>
            <p className="text-muted-foreground mt-2">
              Study materials for {subject.name}
            </p>
          </div>

          <div className="space-y-3">
            {subject.materials.map((material) => (
              <div
                key={material.id}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-4 hover:bg-background/80 transition-colors cursor-pointer border border-border/30 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-foreground">
                    {material.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{material.type}</p>
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
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                  />
                </svg>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
