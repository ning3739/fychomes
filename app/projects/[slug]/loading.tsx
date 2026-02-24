export default function Loading() {
  return (
    <div className="min-h-screen pt-30 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-gray-600 font-medium">Loading Gallery...</p>
      </div>
    </div>
  );
}
