import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Daniel",
    channel: "Daniel Bitton Extra",
    text: "VidlyPro helped my YouTube channel grow faster than ever — the editing quality is next-level!",
  },
  {
    name: "Nathan",
    channel: "Nathan Nazareth",
    text: "Absolutely love how they understand my brand voice and make every video shine. Highly recommended!",
  },
  {
    name: "Dave",
    channel: "Online Business Club",
    text: "From thumbnail design to video storytelling — everything feels cinematic. Worth every penny!",
  },
  {
    name: "Josh",
    channel: "Josh Butcher",
    text: "They literally made my workflow 10x easier. Professional and creative team!",
  },
  {
    name: "Dean",
    channel: "Dean Johnson",
    text: "VidlyPro knows exactly how to make videos perform. Insane results in engagement and reach!",
  },
];

const ReviewCard = ({ text, name, channel }) => (
  <div className="min-w-[320px] md:min-w-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-red-900/30 rounded-2xl p-6 shadow-lg mx-4 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md">
    <p
      className="text-gray-200 italic text-base leading-relaxed line-clamp-3 overflow-hidden"
      title={text}
    >
      “{text}”
    </p>
    <div className="mt-5 text-sm text-gray-400 border-t border-white/10 pt-3">
      <p className=" text-white">{name}</p>
      <p className="text-red-400 text-sm">{channel}</p>
    </div>
  </div>
);

const ReviewSlider = () => {
  return (
    <section
      id="review"
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Background glow */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black pointer-events-none" /> */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl" />

      {/* Title */}
      <div className="max-w-[1240px] mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 ">
          <span className="text-white">
            What Our <span className="text-red-500">Clients</span> Say
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Real creators. Real stories. Real growth.
        </p>
      </div>

      {/* Row 1 */}
      <motion.div
        className="flex items-center whitespace-wrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex items-center whitespace-wrap mt-10 "
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSlider;
