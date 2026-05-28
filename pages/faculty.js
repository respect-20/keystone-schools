import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const faculty = [
  {
    emoji: '🧮',
    name: 'Mr. Tendai Moyo',
    subject: 'Mathematics',
    qualification: 'BSc Mathematics, University of Zimbabwe',
    bio: 'Mr. Moyo brings over 12 years of classroom experience and specialises in making abstract mathematical concepts accessible to all learners. He has coached multiple students to top ZIMSEC results.',
  },
  {
    emoji: '📚',
    name: 'Mrs. Grace Chikwanda',
    subject: 'English Language & Literature',
    qualification: 'BA English, MSc Education, UZ',
    bio: 'Mrs. Chikwanda is a passionate English educator with a talent for developing students\' written and oral communication skills. She leads the school debate team and drama society.',
  },
  {
    emoji: '🔬',
    name: 'Mr. Douglas Sibanda',
    subject: 'Sciences (Biology, Chemistry, Physics)',
    qualification: 'BSc Applied Sciences, NUST',
    bio: 'Mr. Sibanda oversees our state-of-the-art science laboratories and brings a practical, inquiry-based approach to science education. Students under his guidance consistently excel in ZIMSEC sciences.',
  },
  {
    emoji: '🌍',
    name: 'Ms. Rudo Madzivire',
    subject: 'History & Social Studies',
    qualification: 'BA History, MSc International Relations, UZ',
    bio: 'Ms. Madzivire brings African and world history to life in the classroom through storytelling, debates, and current events. She has a particular interest in Zimbabwe\'s post-independence history.',
  },
  {
    emoji: '🗺️',
    name: 'Mr. Farai Ncube',
    subject: 'Geography',
    qualification: 'BSc Geography & Environmental Studies, MSU',
    bio: 'Mr. Ncube combines classroom learning with fieldwork, taking students on excursions to study physical and human geography in real-world settings. He is also the school environmental club patron.',
  },
  {
    emoji: '💻',
    name: 'Ms. Tatenda Mhuri',
    subject: 'Computer Studies',
    qualification: 'BSc Computer Science, HIT',
    bio: 'Ms. Mhuri keeps our computer lab running at its best and teaches students not only technical skills but also digital literacy and responsible internet use. She mentors our coding club.',
  },
  {
    emoji: '⚽',
    name: 'Mr. Blessing Dube',
    subject: 'Physical Education',
    qualification: 'BSc Physical Education & Sport Science, UZ',
    bio: 'Mr. Dube oversees all sports and physical education at the school. He is a qualified football coach and athletics trainer who has guided school teams to multiple provincial championships.',
  },
  {
    emoji: '🎨',
    name: 'Ms. Chipo Mawere',
    subject: 'Art & Design',
    qualification: 'BFA Fine Arts, BASU',
    bio: 'Ms. Mawere is a practising artist whose work has been exhibited nationally. She brings creative energy and professional artistic standards to the classroom, nurturing students\' visual literacy and self-expression.',
  },
];

export default function Faculty() {
  return (
    <>
      <Head>
        <title>Our Faculty — Keystone Schools</title>
        <meta name="description" content="Meet the experienced and dedicated teachers at Keystone Schools, Harare." />
      </Head>

      {/* Nav */}
      <header className="bg-secondary text-white py-4 px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Keystone Schools" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="text-base font-bold text-primary tracking-wide">KEYSTONE</p>
            <p className="text-xs font-bold text-primary tracking-widest">SCHOOLS</p>
          </div>
        </Link>
        <Link href="/" className="text-sm text-gray-300 hover:text-primary transition">
          ← Back to Home
        </Link>
      </header>

      {/* Hero banner */}
      <div className="bg-gray-50 border-b border-gray-100 py-12 px-8 text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Meet Our Team</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-2 mb-3">
          Our Faculty
        </h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Our teachers are passionate, qualified, and committed to helping every student achieve their full potential.
          Each member of our faculty brings deep subject expertise and a genuine love of teaching.
        </p>
      </div>

      {/* Faculty grid */}
      <main className="w-full px-8 sm:px-16 lg:px-24 py-14 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
            >
              {/* Emoji avatar */}
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-4xl mb-4 border border-gray-100">
                {teacher.emoji}
              </div>

              {/* Name */}
              <h3 className="text-secondary font-bold text-sm mb-1">{teacher.name}</h3>

              {/* Subject badge */}
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                {teacher.subject}
              </span>

              {/* Qualification */}
              <p className="text-gray-400 text-xs mb-3 italic">{teacher.qualification}</p>

              {/* Bio */}
              <p className="text-gray-500 text-xs leading-relaxed">{teacher.bio}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Keystone Schools. All rights reserved.
      </footer>
    </>
  );
}
