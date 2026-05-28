import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { label: 'Science Lab', bg: 'bg-primary/10', height: 'h-56' },
  { label: 'Library', bg: 'bg-secondary/10', height: 'h-40' },
  { label: 'Sports Field', bg: 'bg-green-100', height: 'h-64' },
  { label: 'Classrooms', bg: 'bg-blue-100', height: 'h-44' },
  { label: 'Computer Lab', bg: 'bg-purple-100', height: 'h-52' },
  { label: 'Assembly Hall', bg: 'bg-yellow-100', height: 'h-36' },
  { label: 'Art Room', bg: 'bg-pink-100', height: 'h-60' },
  { label: 'Dining Hall', bg: 'bg-orange-100', height: 'h-48' },
  { label: 'School Garden', bg: 'bg-emerald-100', height: 'h-44' },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="py-16 bg-white">
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
            Our Campus
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
          Campus Gallery
        </motion.h2>

        {/* Masonry Grid — 3 columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
              className="break-inside-avoid mb-4"
            >
              <div
                className={`relative ${item.bg} ${item.height} rounded-xl overflow-hidden cursor-pointer`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-secondary/80 flex items-center justify-center rounded-xl"
                >
                  <span className="text-white font-bold text-sm tracking-wide">
                    {item.label}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
