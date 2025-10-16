import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Idea Analysis",
    description:
      "We research your niche, audience, and competitors to uncover video ideas that perform best.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Writing Content",
    description:
      "Our creative writers craft high-retention scripts designed to engage and convert your audience.",
    image:
      "https://images.unsplash.com/photo-1581093588401-22aa8b17302a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Editing the Video",
    description:
      "Our editors bring your story to life with cinematic pacing, transitions, and stunning visuals.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Creating Thumbnail",
    description:
      "We design thumbnails that grab attention instantly and increase your click-through rate.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Post the Video",
    description:
      "We optimize SEO, metadata, and publishing schedules for maximum organic reach.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll into vertical line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      {/* Subtle red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0a0a] to-black" />

      {/* Static red vertical line */}
      <div className="absolute left-1/2 top-0 w-[3px] h-full bg-red-900/40 rounded-full" />

      {/* Animated glowing red line that follows scroll */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-red-500 via-red-400 to-red-600 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.6)]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-20"
        >
          Our <span className="text-red-500">Video Creation</span> Process
        </motion.h2>

        <div className="flex flex-col relative">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isLeft ? -100 : 100,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: index * 0.05,
                }}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-24 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Glowing connection dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.9)]" />

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="flex-1 relative overflow-hidden rounded-3xl border border-red-700/20 shadow-[0_0_25px_rgba(239,68,68,0.2)]"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[320px] object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </motion.div>

                {/* Text */}
                <div
                  className={`flex-1 text-center md:text-left ${
                    isLeft ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-red-500 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
