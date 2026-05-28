import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightBulb, HiBadgeCheck } from 'react-icons/hi';

export default function Programs() {
  const programs = [
    {
      level: 'Form 1',
      title: 'Foundation Year',
      description: 'Establishing core academic skills and social integration',
      subjects: ['Mathematics', 'English', 'Science', 'Social Studies', 'Languages', 'Arts'],
      focus: 'Building strong fundamentals and classroom adaptation',
      icon: HiAcademicCap,
    },
    {
      level: 'Form 2',
      title: 'Development Year',
      description: 'Deepening knowledge and exploring specialization pathways',
      subjects: ['Advanced Math', 'Literature', 'Physics', 'Chemistry', 'Geography', 'History'],
      focus: 'Developing critical thinking and subject mastery',
      icon: HiLightBulb,
    },
    {
      level: 'Form 3',
      title: 'Specialization Year',
      description: 'Focusing on specific streams and preparing for national exams',
      subjects: ['Algebra', 'Calculus', 'Biology', 'Economics', 'Computer Studies'],
      focus: 'Examination preparation and career guidance',
      icon: HiBadgeCheck,
    },
    {
      level: 'Form 4',
      title: 'Excellence Year',
      description: 'Final preparation for national examinations and university entry',
      subjects: ['Advanced Topics', 'Project Work', 'Practical Exams', 'Revision'],
      focus: 'University readiness and academic excellence',
      icon: HiBadgeCheck,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-light to-white">
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
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Comprehensive Curriculum for Forms 1-4
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each form level is designed to progressively develop students academically, socially, and personally.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top colour bar */}
                <div className="h-2 bg-gradient-to-r from-primary to-red-600" />

                {/* Content */}
                <div className="p-10 flex flex-col h-full">

                  {/* Icon + Level row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition">
                      <Icon className="text-primary text-4xl" />
                    </div>
                    <span className="text-primary font-extrabold text-lg uppercase tracking-widest">
                      {program.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-secondary mb-3">
                    {program.title}
                  </h3>

                  {/* Description — flex-1 pushes Focus box to same level across cards */}
                  <p className="text-gray-600 text-base mb-6 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Focus box — fixed height so all cards align */}
                  <div className="mb-6 p-5 bg-primary/5 border border-primary/20 rounded-xl min-h-[90px] flex items-center">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-primary">Focus: </span>{program.focus}
                    </p>
                  </div>

                  {/* Subjects */}
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Key Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
