import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation({ onRegisterClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    // { href: '/faculty', label: 'Faculty' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="w-full px-8 sm:px-16 lg:px-24">
        <div className="flex items-center justify-between h-36">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Keystone Schools"
              className="h-28 w-28 object-contain"
            />
          </div>

          {/* Nav links — centered */}
          <div className="hidden md:flex items-center justify-center gap-10 flex-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold text-secondary hover:text-primary transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Register button — with right padding so it's not at the edge */}
          <div className="flex items-center flex-shrink-0 pr-4">
            <button
              onClick={onRegisterClick}
              className="hidden md:block px-8 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
            >
              Register Now
            </button>
            <button
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2.5 text-sm font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => { onRegisterClick(); setIsOpen(false); }}
              className="mt-2 w-full px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              Register Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
