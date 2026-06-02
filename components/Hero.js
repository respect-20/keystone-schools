import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero({ onRegisterClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-students.jpg')" }}
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-secondary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 bg-white/15 border border-white/30 rounded-full text-white font-semibold text-sm">
              🏆 Award-Winning Institution Since 2025
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
          >
            Excellence in <span className="text-primary">Education</span> <br /> Shapes Tomorrow's Leaders
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Keystone Schools provides world-class education for Forms 1-4 with innovative teaching methods, modern facilities, and a commitment to developing well-rounded individuals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={onRegisterClick}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
            >
              Register Now <HiArrowRight />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition text-lg"
            >
              Learn More
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">Forms 1–4</div>
              <div className="text-sm text-white/75">Now Enrolling</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">Small</div>
              <div className="text-sm text-white/75">Class Sizes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">2025</div>
              <div className="text-sm text-white/75">Est. Mutare</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="text-white text-3xl">↓</div>
      </motion.div>
    </section>
  );
}
