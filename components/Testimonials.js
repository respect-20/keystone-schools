import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiArrowRight } from 'react-icons/hi';

const reasons = [
  {
    icon: '🏫',
    title: 'Brand New Facilities',
    content: 'Our campus is freshly built and equipped with modern classrooms, a computer lab, and a well-stocked library — all set up for the 2026 intake.',
  },
  {
    icon: '👨‍🏫',
    title: 'Dedicated Teachers',
    content: 'Our team of qualified and passionate educators are committed to giving every student individual attention in a small, focused class environment.',
  },
  {
    icon: '📚',
    title: 'ZIMSEC Aligned',
    content: 'Our curriculum is fully aligned with the ZIMSEC O-Level syllabus, ensuring students are well prepared for national examinations from Form 1.',
  },
  {
    icon: '🤝',
    title: 'Be Among the First',
    content: 'Join Keystone Schools as part of our founding class of 2026. Early students benefit from personalised attention, smaller classes, and a close-knit school community.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Be Part of Something New
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Keystone Schools opened its doors in 2026. We are building something special in Mutare — and we want your child to be part of it from the very beginning.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.content}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-xl border border-primary/20"
        >
          <p className="text-gray-700 text-lg mb-2 font-semibold">
            📣 Now accepting applications for Forms 1 – 4
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Limited spaces available. Register today to secure your child's place.
          </p>
          <p className="text-primary font-bold flex items-center justify-center gap-2">
            Be part of our founding class <HiArrowRight />
          </p>
        </motion.div>

      </div>
    </section>
  );
}
