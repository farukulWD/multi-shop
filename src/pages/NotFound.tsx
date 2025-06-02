import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-9xl font-bold text-green-700">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page not found
      </p>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-md shadow hover:bg-green-800 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
