import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const contacts = [
  {
    name: 'Admin',
    subtitle: 'Reception WhatsApp',
    status: 'Available',
    link: 'https://wa.me/263771824701?text=Hi, I would like to enquire about Keystone Schools.',
    icon: <FaWhatsapp className="text-green-500 text-xl" />,
  },
  {
    name: 'Calls',
    subtitle: '0771 824 701',
    status: 'Available',
    link: 'tel:+263771824701',
    icon: <FaPhone className="text-green-500 text-lg" />,
  },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 px-5 py-4 flex items-start justify-between gap-3">
              <p className="text-white text-sm font-medium leading-snug">
                Our customer support team is here to answer your questions. Ask us anything!
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white mt-0.5 flex-shrink-0"
              >
                <HiX className="text-lg" />
              </button>
            </div>

            {/* Contacts */}
            <div className="divide-y divide-gray-100">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img src="/logo.png" alt="Keystone" className="h-10 w-10 object-contain rounded-full border border-gray-100" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <p className="font-bold text-secondary text-sm">{contact.name}</p>
                    <p className="text-gray-500 text-xs">{contact.subtitle}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      {contact.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div>{contact.icon}</div>
                </a>
              ))}
            </div>

            {/* Footer button */}
            <a
              href="https://wa.me/263771824701?text=Hi, I would like to enquire about Keystone Schools."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-bold text-sm py-3 w-full"
            >
              <FaWhatsapp className="text-lg" />
              Hi, how can I help?
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
        transition={{
          scale: { type: 'spring', stiffness: 260, damping: 12, delay: 1 },
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
        }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </motion.button>
    </div>
  );
}
