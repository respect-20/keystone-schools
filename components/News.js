import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiChevronDown, HiChevronUp } from 'react-icons/hi';

const newsItems = [
  {
    date: 'January 2026',
    title: 'Keystone Schools Opens Its Doors in Mutare',
    excerpt:
      'We are thrilled to announce the official opening of Keystone Schools at Shop #2 Bvirindi Business Center, Dora Dombo, Mutare. A new chapter in quality education begins.',
    full: 'Keystone Schools was founded with one clear mission — to provide quality, affordable, and holistic secondary education to the young people of Mutare and surrounding areas. We are now open and accepting applications for Forms 1 to 4 for the 2026 academic year. Our campus is equipped with modern classrooms, a computer lab, and a well-resourced library. We invite parents and guardians to visit us, meet our teachers, and register their children today.',
  },
  {
    date: 'January 2026',
    title: 'Applications Now Open for Forms 1 – 4',
    excerpt:
      'Keystone Schools is now accepting applications for all form levels. Spaces are limited — early registration is encouraged to secure your child\'s place.',
    full: 'To apply, parents and guardians are required to submit a completed registration form, certified copies of the student\'s birth certificate, and most recent school report. Applications can be submitted online through our website or in person at our offices at Shop #2 Bvirindi Business Center, Dora Dombo, Mutare. For enquiries, contact us on +263 771 824 701 or email info@keystoneschools.co.zw. We look forward to welcoming your child to the Keystone family.',
  },
  {
    date: 'January 2026',
    title: 'Meet Our Teaching Team',
    excerpt:
      'Keystone Schools has assembled a team of qualified, experienced, and passionate educators dedicated to the success of every student.',
    full: 'Our teachers hold recognised qualifications and bring a wealth of classroom experience across all subject areas. We believe that great teachers are the foundation of great schools. At Keystone, every teacher is committed not just to academic results but to the overall wellbeing and development of each student. We maintain small class sizes to ensure that no child is left behind and every learner receives the individual support they deserve.',
  },
  {
    date: 'January 2026',
    title: 'Our Vision: Excellence, Character & Community',
    excerpt:
      'Keystone Schools was built on three pillars — academic excellence, strong character development, and a safe, supportive school community.',
    full: 'We believe education is more than passing examinations. At Keystone, we develop young people who are confident, respectful, and ready for the world. Our school culture promotes discipline, hard work, and kindness. We follow the ZIMSEC curriculum and prepare Form 4 students thoroughly for their Ordinary Level examinations. Beyond academics, we offer co-curricular activities including sports, debate, and cultural programmes to ensure the all-round development of every student.',
  },
];

export default function News() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="w-full px-8 sm:px-16 lg:px-24">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-2"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            News &amp; Announcements
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-secondary mt-3 mb-10 text-center"
        >
          Latest News &amp; Announcements
        </motion.h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Date badge */}
              <div className="px-6 pt-5 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <HiCalendar className="text-sm" />
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-4 flex-1">
                <h3 className="text-secondary font-bold text-base mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>

                {/* Expanded view */}
                {expanded === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-600 text-sm leading-relaxed mt-3 border-t border-gray-100 pt-3"
                  >
                    {item.full}
                  </motion.p>
                )}
              </div>

              {/* Read More button */}
              <div className="px-6 pb-5">
                <button
                  onClick={() => toggle(index)}
                  className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:text-red-700 transition-colors duration-200"
                >
                  {expanded === index ? (
                    <>Show Less <HiChevronUp className="text-sm" /></>
                  ) : (
                    <>Read More <HiChevronDown className="text-sm" /></>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
