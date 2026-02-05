export default function Loading() {
  return (
    <div className="min-h-screen pt-30 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-600 font-medium">Loading Projects...</p>
      </div>
    </div>
  );
}
