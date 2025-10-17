import React from "react";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Content wrapper */}
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Founder Image with overlay */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          {/* glowing border */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 via-yellow-500 to-red-700 rounded-3xl opacity-50 blur-xl group-hover:opacity-80 transition duration-300" />

          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/noor.png" // 🔁 replace with your actual image path
              alt="Founder"
              className="w-[350px] h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-red-800/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Overlay Text */}
            <div className="absolute bottom-5 left-0 w-full text-center px-4">
              <h3 className="text-2xl  text-white tracking-wide drop-shadow-md">
                Founder of <span className="text-red-500">VidlyPro</span>
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">
              The Story Behind <span className="text-red-500">VidlyPro</span>
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I’m <span className="text-white ">Noor</span>, the founder of{" "}
            <span className="text-red-500">VidlyPro</span>. What started as a
            small idea to help creators scale their content has grown into a
            global agency trusted by{" "}
            <span className="text-yellow-400 font-medium">500+ clients</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Our mission is simple — to help creators and brands turn their ideas
            into scroll-stopping video content that builds influence and drives
            engagement. At VidlyPro, every frame is designed to create impact.
          </p>

          <div className="mt-6">
            <a
              href="https://calendly.com/noorrk042/30min"
              className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-md text-lg shadow-md hover:shadow-red-500/40 transition-all duration-300"
            >
              BOOK A CALL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
