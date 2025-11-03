import { motion } from "framer-motion";
import { FaPlay, FaCut, FaFilm, FaMusic } from "react-icons/fa";

export default function Hero2() {
  const icons = [
    { Icon: FaFilm, top: "20%", left: "10%", delay: 0 },
    { Icon: FaCut, top: "70%", left: "15%", delay: 0.4 },
    { Icon: FaMusic, top: "35%", right: "10%", delay: 0.8 },
  ];

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#1a0000] to-red-950 text-white"
    >
      {/* Background gradient glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25)_0%,transparent_70%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating icons */}
      {icons.map(({ Icon, top, left, right, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500/40"
          style={{ top, left, right }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={36} />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl  leading-tight mb-6 tracking-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transform Your <span className="text-red-500">Videos</span>
          into High-Converting <span className="text-white/90">Ads</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We create ad edits that grab attention in seconds — powerful visuals,
          fast pacing, and scroll-stopping creativity designed to make your
          brand unforgettable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-10 py-4 text-lg rounded-full  shadow-lg shadow-red-800/40 transition">
            <a href="https://wa.me/8801903855586">Get Started</a>
          </button>

          <button className="border border-red-400 text-red-400 hover:bg-red-500/10 px-10 py-4 text-lg rounded-full flex items-center justify-center gap-2 transition">
            <FaPlay className="text-red-400" />
            <a href="#work">Watch Demo</a>
          </button>
        </motion.div>
      </motion.div>

      {/* Gradient overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </section>
  );
}
