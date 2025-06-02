export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-8 h-8 border-4 border-green-700 border-dashed rounded-full animate-spin" />
    </div>
  );
}
