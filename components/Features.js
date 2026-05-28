import React from 'react';
import { motion } from 'framer-motion';
import { HiLibrary, HiSparkles, HiUserGroup, HiGlobeAlt, HiDesktopComputer, HiHeart } from 'react-icons/hi';

export default function Features() {
  const features = [
    {
      icon: HiDesktopComputer,
      title: 'Modern Technology',
      description: 'Equipped with latest learning tools, smart classrooms, and computer laboratories for practical skills.',
      scrollTo: 'programs',
    },
    {
      icon: HiUserGroup,
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with years of experience and continuous professional development.',
      scrollTo: 'about',
    },
    {
      icon: HiLibrary,
      title: 'Extensive Resources',
      description: 'Well-stocked library, digital databases, and learning materials supporting all subjects.',
      scrollTo: 'about',
    },
    {
      icon: HiSparkles,
      title: 'Co-Curricular Activities',
      description: 'Sports, clubs, debate, drama, and cultural activities promoting all-round development.',
      scrollTo: 'programs',
    },
    {
      icon: HiGlobeAlt,
      title: 'Global Perspective',
      description: 'International curriculum standards and partnerships with educational institutions worldwide.',
      scrollTo: 'about',
    },
    {
      icon: HiHeart,
      title: 'Student Support',
      description: 'Counseling services, mentorship programs, and personalized academic guidance for every student.',
      scrollTo: 'contact',
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary text-white">
      <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why Choose Keystone
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Excellence in Every Aspect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We provide comprehensive educational services designed to nurture talented minds.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group p-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-8 inline-block p-5 bg-primary/20 rounded-xl group-hover:bg-primary/40 transition w-fit">
                  <Icon className="text-primary text-5xl" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed flex-1">{feature.description}</p>

                {/* Accent */}
                <button
                  onClick={() => document.getElementById(feature.scrollTo)?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 flex items-center space-x-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
