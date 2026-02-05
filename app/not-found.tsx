'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-dark mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-semibold transition-colors"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-dark px-6 py-3 rounded-sm font-semibold border border-gray-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/projects" className="text-primary hover:underline font-medium">
              Our Projects
            </Link>
            <Link href="/services" className="text-primary hover:underline font-medium">
              Our Services
            </Link>
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
