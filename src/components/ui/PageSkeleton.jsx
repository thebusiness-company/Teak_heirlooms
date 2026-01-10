export default function PageSkeleton() {
  return (
    <div className="min-h-screen px-6 py-8 animate-pulse">
      {/* Header */}
      <div className="h-6 w-48 bg-gray-200 rounded mb-6" />

      {/* Hero */}
      <div className="h-64 w-full bg-gray-200 rounded mb-10" />

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  );
}
