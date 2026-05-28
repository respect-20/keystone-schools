import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-secondary text-white px-6 py-4 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                Learn more
              </a>
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-semibold text-gray-300 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-white transition-colors duration-200"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-xs font-bold bg-primary text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
