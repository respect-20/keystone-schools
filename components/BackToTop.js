import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-red-700 transition-colors duration-200"
        >
          <HiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
