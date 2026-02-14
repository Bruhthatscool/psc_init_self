export function SubjectTile({ subject, onOpen }) {
  return (
    <div
      onClick={() => onOpen(subject)}
      className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-foreground">{subject.name}</h3>
          <svg
            className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>

        <p className="text-sm text-muted-foreground">
          {subject.materials.length} learning materials
        </p>

        <div className="pt-2 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Click to view study materials
          </p>
        </div>
      </div>
    </div>
  );
}
