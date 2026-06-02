import React from 'react';
import Link from 'next/link';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary text-white">
      {/* Google Maps embed */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.0!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1234567890"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Keystone Schools Location"
          className="rounded-t-xl"
        />
      </div>

      <div className="w-full px-6 sm:px-16 lg:px-24 py-8">

        {/* 3 Columns — 2-col grid on mobile, row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">

          {/* Col 1 — Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 underline underline-offset-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about"        className="text-gray-400 hover:text-primary transition text-xs">About Us</a></li>
              <li><a href="#programs"     className="text-gray-400 hover:text-primary transition text-xs">Programs</a></li>
              <li><a href="#features"     className="text-gray-400 hover:text-primary transition text-xs">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition text-xs">Testimonials</a></li>
            </ul>
          </div>

          {/* Col 2 — Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 underline underline-offset-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@keystoneschools.co.zw?subject=Academic Calendar Request" className="text-gray-400 hover:text-primary transition text-xs">Academic Calendar</a></li>
              <li><a href="mailto:info@keystoneschools.co.zw?subject=Student Portal Access" className="text-gray-400 hover:text-primary transition text-xs">Student Portal</a></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition text-xs">Policies</Link></li>
              <li><a href="mailto:info@keystoneschools.co.zw?subject=Downloads Request" className="text-gray-400 hover:text-primary transition text-xs">Downloads</a></li>
            </ul>
          </div>

          {/* Col 3 — Contact Us (full width on mobile) */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 underline underline-offset-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+263771824701" className="flex items-center gap-2 text-gray-400 hover:text-primary transition text-xs">
                  <HiPhone className="text-sm flex-shrink-0" />
                  <span>+263 771 824 701</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@keystoneschools.co.zw" className="flex items-center gap-2 text-gray-400 hover:text-primary transition text-xs">
                  <HiMail className="text-sm flex-shrink-0" />
                  <span>info@keystoneschools.co.zw</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-xs">
                <HiLocationMarker className="text-sm flex-shrink-0" />
                <span>Shop #2 Bvirindi Business Center, Dora Dombo, Mutare</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-4" />

        {/* Bottom bar — stacks on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} Keystone Schools. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="https://facebook.com/keystoneschools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition text-xl"><FaFacebook /></a>
            <a href="https://twitter.com/keystoneschools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition text-xl"><FaTwitter /></a>
            <a href="https://instagram.com/keystoneschools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition text-xl"><FaInstagram /></a>
          </div>
          <div className="flex gap-4 text-xs">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-primary transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
