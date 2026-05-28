import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onDone) onDone();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo */}
          <motion.img
            src="/logo.svg"
            alt="Keystone Schools"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 object-contain mb-4"
          />

          {/* School name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-2xl font-bold text-primary tracking-widest mb-1"
          >
            KEYSTONE SCHOOLS
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-gray-400 tracking-wider mb-8"
          >
            Excellence in Education
          </motion.p>

          {/* Loading bar track */}
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
