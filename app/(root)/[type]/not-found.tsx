'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-8xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-4xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8 max-w-md text-center">
         Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-black rounded-md shadow-lg hover:bg-blue-700 transition border-2 border-blue-700 text-lg font-semibold"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
