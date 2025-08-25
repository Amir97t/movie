export default function MovieCardSkeleton() {
  return (
    <div className="w-[282px] h-[480px] max-w-sm rounded-lg bg-gray-800 animate-pulse">
      <div className="h-[400px] bg-gray-700 rounded-t-lg"></div>
      <div className="p-4 space-y-3">
        <div className="h-3 bg-gray-700 rounded w-3/4"></div>
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 mt-4 bg-gray-700 rounded-full"></div>
          <div className="h-3 mt-2 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
