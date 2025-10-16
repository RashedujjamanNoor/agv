import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes VidlyPro different from other agencies?",
    answer:
      "We provide a full in-house team of 40+ professionals, not freelancers. Our DFY Content Funnel and personalized CRM ensure consistent growth for every creator.",
  },
  {
    question: "Do you work with small creators or only big influencers?",
    answer:
      "We specialize in helping small to mid-level creators scale fast — delivering professional editing, thumbnails, and marketing strategies to grow your brand.",
  },
  {
    question: "What platforms do you edit for?",
    answer:
      "We handle content for YouTube, TikTok, Instagram Reels, and Shorts — all optimized for engagement and retention.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No long commitments! You can start monthly and scale your plan anytime based on your content volume and goals.",
  },
  {
    question: "How fast will I get my edited videos?",
    answer:
      "Turnaround time depends on package type — usually within 48–72 hours per video with unlimited revisions until satisfaction.",
  },
  {
    question: "Is there support available if I need help?",
    answer:
      "Absolutely! We offer 24/7 support with direct chat access to your project manager and our creative team.",
  },
];

export default function FAQ() {
  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);

  const toggleFAQ = (index, side) => {
    if (side === "left") {
      setActiveLeft(activeLeft === index ? null : index);
    } else {
      setActiveRight(activeRight === index ? null : index);
    }
  };

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3);

  return (
    <div className="relative bg-gradient-to-b from-black via-[#0a0000] to-black py-28 text-white overflow-hidden">
      {/* Soft ambient red background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.07)_0%,transparent_80%)] pointer-events-none" />

      {/* Small glowing red circle shadow */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-16"
        >
          Frequently Asked <span className="text-red-500">Questions</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => toggleFAQ(index, "left")}
                className={`cursor-pointer rounded-2xl border border-red-800/30 bg-gradient-to-b from-[#150404] to-[#240505] p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:border-red-500/50 ${
                  activeLeft === index ? "border-red-500/70" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl text-gray-100">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeLeft === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-500 text-2xl font-bold"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {activeLeft === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-gray-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {rightFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => toggleFAQ(index, "right")}
                className={`cursor-pointer rounded-2xl border border-red-800/30 bg-gradient-to-b from-[#150404] to-[#240505] p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:border-red-500/50 ${
                  activeRight === index ? "border-red-500/70" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl  text-gray-100">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeRight === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-500 text-2xl font-bold"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {activeRight === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-gray-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
