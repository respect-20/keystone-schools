import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function RegistrationCTA({ onRegisterClick }) {
  return (
    <section className="py-10 bg-gradient-to-r from-primary to-red-700 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Join Keystone Schools?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards academic excellence and personal growth. Our admissions team is ready to guide you through the enrollment process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRegisterClick}
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg shadow-xl hover:shadow-2xl"
            >
              Open Registration <HiArrowRight />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition text-lg"
            >
              Contact Admissions
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
