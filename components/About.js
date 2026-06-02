import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

function useCountUp(target, duration = 1500, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

function AnimatedStat({ value, label, suffix, delay }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 1500, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-md"
    >
      <div className="text-3xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-xs">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const features = [
    'State-of-the-art facilities and technology',
    'Experienced and qualified faculty members',
    'Student-centered learning approach',
    'Holistic development programs',
    'Strong academic standards',
    'Safe and supportive environment',
  ];

  const stats = [
    { value: 2025, suffix: '', label: 'Est. Year' },
    { value: 500, suffix: '+', label: 'Successful Graduates' },
    { value: 5, suffix: '★', label: 'Parent Satisfaction' },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="w-full px-8 sm:px-16 lg:px-24">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            About Keystone Schools
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-secondary mt-3 mb-6 text-center"
        >
          Building Foundations for Success
        </motion.h2>

        {/* Two paragraphs — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-10"
        >
          <p className="text-gray-600 leading-relaxed">
            Since our establishment, Keystone Schools has been a beacon of educational excellence,
            committed to nurturing young minds and preparing them for the challenges of tomorrow.
            Our comprehensive curriculum combines academic rigour with practical skills development,
            ensuring every student leaves equipped not just with knowledge, but with the character
            and confidence to excel in whatever path they choose.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in fostering a learning environment where every student can thrive, discover
            their potential, and develop the confidence to lead. Our dedicated team of educators is
            passionate about making a lasting difference in every student&apos;s life — building strong
            academic foundations while nurturing creativity, critical thinking, and a love for
            lifelong learning.
          </p>
        </motion.div>

        {/* Marquee ticker — features + stats scrolling continuously */}
        <div className="mt-8 overflow-hidden bg-gray-50 rounded-2xl py-6 relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {/* Render items twice so the loop is seamless */}
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex items-center gap-10 flex-shrink-0">
                {features.map((feature, index) => (
                  <div key={`f-${index}`} className="flex items-center gap-2 whitespace-nowrap">
                    <HiCheckCircle className="text-primary text-xl flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-semibold">{feature}</span>
                  </div>
                ))}
                {stats.map((stat, index) => (
                  <div key={`s-${index}`} className="flex items-center gap-2 whitespace-nowrap bg-white border border-primary/20 rounded-xl px-5 py-2">
                    <span className="text-primary font-bold text-lg">{stat.value}{stat.suffix}</span>
                    <span className="text-gray-500 text-sm">{stat.label}</span>
                  </div>
                ))}
                {/* Divider dot between loops */}
                <span className="text-primary text-2xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
