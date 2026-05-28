import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: 'What are the admission requirements for Keystone Schools?',
    answer:
      'To be admitted to Keystone Schools, prospective students must submit a completed application form, certified copies of their Grade 7 results (for Form 1 entry) or previous form results, a birth certificate, and two passport-sized photographs. An entrance assessment may be required to place students in the appropriate academic stream. Applications are accepted on a rolling basis, subject to available spaces.',
  },
  {
    question: 'How and when are school fees paid?',
    answer:
      'School fees are payable at the beginning of each term before or on the first day of school. We accept payment via bank transfer, ZIPIT, EcoCash, and cash at the school bursar\'s office. Fee statements are sent to parents at least two weeks before each term begins. Payment plans can be arranged in advance by contacting the bursar directly. Fees cover tuition, textbook hire, and basic stationery.',
  },
  {
    question: 'What are the term dates for the current academic year?',
    answer:
      'The Keystone Schools academic year follows the Zimbabwe Ministry of Primary and Secondary Education calendar. Term 1 typically runs from late January to April, Term 2 from May to August, and Term 3 from September to December. Exact dates are confirmed each year and are communicated to parents via our newsletter and school notice board. Please check our Events Calendar or contact the school office for the most current dates.',
  },
  {
    question: 'Is there a school uniform and where can it be purchased?',
    answer:
      'Yes, Keystone Schools has a compulsory uniform for all students. The uniform consists of a white shirt or blouse, grey trousers or skirt, a school blazer with the school crest, black shoes, and the school tie. Sports attire is also required for PE lessons and extra-curricular activities. Uniforms can be purchased from our approved supplier: Uniforms Plus on Samora Machel Avenue, Harare. A full uniform list is included in the welcome pack sent upon acceptance.',
  },
  {
    question: 'Does Keystone Schools offer boarding facilities?',
    answer:
      'Yes, we offer modern boarding facilities for both boys and girls. Our boarding house provides a safe, structured, and nurturing environment with supervised study time every evening, nutritious meals, and 24-hour supervision by qualified house parents. Boarders have access to the school library, computer lab, and recreational facilities outside class hours. Applications for boarding are separate from the academic application and places are limited, so early application is recommended.',
  },
  {
    question: 'What subject choices are available at Keystone Schools?',
    answer:
      'At Form 3 and 4 level, students choose from a wide range of subjects in addition to the compulsory core. Core subjects include English Language, Mathematics, and Combined Science. Optional subjects include History, Geography, Commerce, Accounts, Art & Design, Computer Studies, Physical Education, Shona, and Ndebele. Subject selection is guided by academic performance, career aspirations, and teacher recommendations. Subject change requests must be submitted within the first two weeks of the new academic year.',
  },
  {
    question: 'How does Keystone Schools prepare students for ZIMSEC examinations?',
    answer:
      'Our academic programme is fully aligned with the ZIMSEC curriculum and syllabus. Form 4 students write the Zimbabwe General Certificate of Education (ZGCE) Ordinary Level examinations. We run intensive revision programmes in Term 3, provide past examination papers, and offer additional tutoring sessions for students who need extra support. We have consistently achieved strong results and our students are well prepared for both ZIMSEC and HEXCO pathways. Our examination results are published annually.',
  },
  {
    question: 'What extra-curricular activities are available?',
    answer:
      'Keystone Schools believes in holistic student development. We offer a wide range of extra-curricular activities including football, netball, volleyball, swimming, athletics, chess, debate and public speaking, drama and theatre, choir, visual arts, and environmental club. We also have an active student council and peer mentorship programme. Students are encouraged to participate in at least one activity per term. Inter-school competitions and cultural events are held throughout the year.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
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
            Got Questions?
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
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none group"
              >
                <span className="text-secondary font-semibold text-sm pr-4 group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 text-primary"
                >
                  <HiChevronDown className="text-xl" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
