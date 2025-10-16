import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 500, suffix: "+", label: "Clients" },
  { number: 200, suffix: "%", label: "More Engagement" },
  { number: 5, suffix: "x", label: "More Reach" },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 1500; // milliseconds
      const stepTime = 10;
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, stepTime);
    });
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-b from-black via-[#0a0000] to-black text-white py-28 overflow-hidden"
    >
      {/* Background spotlight & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,0,0.1)_0%,transparent_70%)]" />

      {/* Container */}
      <div className="relative max-w-6xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-16"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Our Performance Speaks Itself
          </span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center relative">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col items-center"
            >
              {/* Animated count */}
              <motion.h3
                animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]"
              >
                {counts[i]}
                {stats[i].suffix}
              </motion.h3>

              {/* Label */}
              <p className="mt-3 text-gray-300 uppercase tracking-widest text-sm md:text-base">
                {stats[i].label}
              </p>

              {/* Divider line between columns */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-[1px] bg-gradient-to-b from-red-400/60 to-red-600/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
