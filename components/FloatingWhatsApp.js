import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="bg-white text-secondary text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
        >
          Chat with us
        </motion.span>
      )}
      <motion.a
        href="https://wa.me/263771824701"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </motion.div>
  );
}
