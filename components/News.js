import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiChevronDown, HiChevronUp } from 'react-icons/hi';

const newsItems = [
  {
    date: 'May 15, 2025',
    title: '2025 Academic Year Term Dates Announced',
    excerpt:
      'The school has confirmed the official term dates for the 2025 academic year in line with the Ministry of Primary and Secondary Education calendar.',
    full: 'Term 1 runs from 27 January to 4 April. Term 2 begins 6 May and ends 1 August. Term 3 starts 2 September and concludes 5 December. Parents are advised to ensure all fees are settled before the first day of each term. A full academic calendar including public holidays and examination windows is available from the school office or on our newsletter. We look forward to a productive and successful year.',
  },
  {
    date: 'April 28, 2025',
    title: 'Prize Giving Day 2025 — Save the Date',
    excerpt:
      'Keystone Schools is proud to announce that our annual Prize Giving Ceremony will be held on Friday, 28 November 2025 at the school assembly hall.',
    full: 'The event will begin at 10:00 AM and all parents, guardians, and invited guests are warmly welcome to attend. The ceremony will celebrate academic excellence, sporting achievements, and outstanding contributions to school life. Students who have been nominated for awards will be notified two weeks before the event. Smart dress code is required for all attendees. Refreshments will be served after the ceremony.',
  },
  {
    date: 'April 10, 2025',
    title: 'New Sports Development Programme Launched',
    excerpt:
      'We are excited to introduce our expanded sports programme for 2025, featuring new coaching partnerships and improved facilities for football, netball, and athletics.',
    full: 'The programme is a result of a new partnership with Zimbabwe Schools Sports Association and brings qualified coaches to work alongside our dedicated PE department. Football, netball, volleyball, and athletics have all received dedicated training schedules. The school has also resurfaced the athletics track and erected new goal posts on the main field. Inter-school competitions will begin in Term 2. All Form 1–4 students are encouraged to attend trials.',
  },
  {
    date: 'March 20, 2025',
    title: 'Outstanding ZIMSEC O-Level Results Achievement',
    excerpt:
      'Keystone Schools celebrates yet another year of exceptional ZIMSEC Ordinary Level results, with 94% of candidates achieving five or more subjects.',
    full: 'The 2024 November ZIMSEC examinations delivered our best-ever results. 94% of Form 4 candidates passed five or more subjects at grade C or better. Mathematics and English Language continued to be areas of strength, with pass rates of 91% and 97% respectively. Top student Tatenda Moyo achieved 10As and has been offered a scholarship to a leading A-Level college. The school thanks all teachers, students, and parents for their dedication throughout the year.',
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
