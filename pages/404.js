import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Keystone Schools</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      {/* Nav */}
      <header className="bg-secondary text-white py-4 px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Keystone Schools" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="text-base font-bold text-primary tracking-wide">KEYSTONE</p>
            <p className="text-xs font-bold text-primary tracking-widest">SCHOOLS</p>
          </div>
        </Link>
        <Link href="/" className="text-sm text-gray-300 hover:text-primary transition">
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-8 py-16 bg-white">
        <img
          src="/logo.svg"
          alt="Keystone Schools"
          className="w-20 h-20 object-contain mb-6 opacity-60"
        />

        <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>

        <h2 className="text-2xl font-bold text-secondary mb-4">Page Not Found</h2>

        <p className="text-gray-500 text-sm max-w-md leading-relaxed mb-8">
          Oops! It looks like the page you were looking for has moved or doesn&apos;t exist.
          Don&apos;t worry — you can head back to our homepage to find what you need.
        </p>

        <Link
          href="/"
          className="px-8 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
        >
          Back to Home
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Keystone Schools. All rights reserved.
      </footer>
    </>
  );
}
