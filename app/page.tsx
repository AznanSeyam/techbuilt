export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Text */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Welcome to TechBuilt
      </h1>

      {/* Sub-Text */}
      <p className="text-lg text-gray-500 max-w-md">Build, Create, Show...</p>
    </div>
  );
}
