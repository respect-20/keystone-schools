import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiCheckCircle } from 'react-icons/hi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`Please add ${trimmed} to your newsletter.`);
    window.location.href = `mailto:info@keystoneschools.co.zw?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-14 bg-primary">
      <div className="w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <HiMail className="text-white text-2xl" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-3"
          >
            Stay Updated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/80 text-sm mb-7"
          >
            Subscribe to our newsletter for the latest school news, event announcements, and important updates delivered straight to your inbox.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-white font-semibold"
            >
              <HiCheckCircle className="text-2xl" />
              <span>Thank you! Your subscription request has been sent.</span>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-sm text-secondary placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-white text-sm font-bold rounded-lg hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          )}

          {error && (
            <p className="text-white/80 text-xs mt-2">{error}</p>
          )}

        </div>
      </div>
    </section>
  );
}
