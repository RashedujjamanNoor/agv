import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24  text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_30%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready to <span className="text-red-500">Grow Your Channel</span>?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Let’s talk strategy and show you how our experts can help boost your
          reach, engagement, and brand visibility with a powerful content system
          built for results.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://calendly.com/noorrk042/30min"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0px 0px 35px rgba(239,68,68,0.6)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-lg text-white transition-all duration-300 hover:from-red-500 hover:to-red-600 focus:outline-none"
        >
          Book a 30 Min Call
        </motion.a>
      </div>

      {/* Decorative glowing circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600/10 rounded-full blur-3xl" />
    </section>
  );
}
