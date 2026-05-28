import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiCalendar } from 'react-icons/hi';

const events = [
  {
    date: 'June 7, 2025',
    month: 'JUN',
    day: '07',
    name: 'Open Day',
    description:
      'Prospective students and their parents are invited to tour the campus, meet our teachers, and learn about our programmes and admission process.',
    location: 'Main Campus, Harare',
  },
  {
    date: 'May 6, 2025',
    month: 'MAY',
    day: '06',
    name: 'Term 2 Begins',
    description:
      'All students report for the start of Term 2. Boarding students should arrive by 5:00 PM on Sunday 5 May. Full uniform is required on day one.',
    location: 'Keystone Schools Campus',
  },
  {
    date: 'July 19, 2025',
    month: 'JUL',
    day: '19',
    name: 'Sports Day 2025',
    description:
      'Our annual inter-house sports day featuring athletics, football, netball, and swimming competitions. Parents and family are welcome to attend and cheer.',
    location: 'School Sports Grounds',
  },
  {
    date: 'July 26, 2025',
    month: 'JUL',
    day: '26',
    name: 'Parent-Teacher Meeting',
    description:
      'Mandatory meetings between parents/guardians and class teachers to discuss student progress, academic reports, and support strategies for Term 3.',
    location: 'School Classrooms',
  },
  {
    date: 'November 28, 2025',
    month: 'NOV',
    day: '28',
    name: 'Prize Giving Ceremony',
    description:
      'Annual ceremony celebrating academic excellence, sporting achievement, and outstanding contributions to school life. All parents and guardians are invited.',
    location: 'Assembly Hall, Main Campus',
  },
  {
    date: 'October 6, 2025',
    month: 'OCT',
    day: '06',
    name: 'ZIMSEC Exams Begin',
    description:
      'Form 4 students begin their ZIMSEC Ordinary Level examinations. A full timetable will be distributed to candidates. Good luck to all our Form 4 students!',
    location: 'Examination Halls',
  },
];

export default function EventsCalendar() {
  return (
    <section id="events" className="py-16 bg-white">
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
            School Calendar
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
          Upcoming Events
        </motion.h2>

        {/* Timeline list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-stretch gap-5 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
            >
              {/* Red left accent + date block */}
              <div className="flex-shrink-0 w-16 bg-primary flex flex-col items-center justify-center text-white py-4">
                <span className="text-xs font-bold tracking-wider">{event.month}</span>
                <span className="text-2xl font-bold leading-tight">{event.day}</span>
              </div>

              {/* Content */}
              <div className="py-4 pr-5 flex-1">
                <h3 className="text-secondary font-bold text-base mb-1">{event.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{event.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  <HiLocationMarker className="text-sm" />
                  {event.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
