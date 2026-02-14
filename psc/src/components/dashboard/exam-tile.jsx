// import { Badge } from "@/components/ui/badge";

export function ExamTile({ title, lastDate, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Closed":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "Result Published":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="bg-card/60 backdrop-blur-md shadow-lg rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground line-clamp-2">
          {title}
        </h3>

        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Last Date</p>
            <p className="font-semibold text-foreground">{lastDate}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Status</span>
            <div
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
