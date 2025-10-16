import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nathan Nazareth",
    views: "17M+ Views",
    subs: "575K Subscribers",
    image: "./nathan.jpg",
  },
  {
    name: "Vanessa",
    views: "48M+ Views",
    subs: "981K Subscribers",
    image: "./vanessaa.jpg",
  },
  {
    name: "Joel",
    views: "33M+ Views",
    subs: "302K Subscribers",
    image: "./Joel.jpg",
  },
  {
    name: "Sarah",
    views: "2M+ Views",
    subs: "58K Subscribers",
    image: "./Sarah.jpg",
  },
  {
    name: "Daniel",
    views: "400k+ Views",
    subs: "17K Subscribers",
    image: "./daniel.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-[#0a0000] to-black py-24 overflow-hidden text-white">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08)_0%,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          Our <span className="text-red-500">Creator Success</span> Stories
        </h2>

        <div className="relative flex justify-center items-center h-[340px] md:h-[420px]">
          {testimonials.map((item, i) => {
            const isActive = i === index;
            const offset =
              (i - index + testimonials.length) % testimonials.length;

            let x = 0,
              scale = 1,
              opacity = 1,
              blur = "blur(0px)";

            if (offset === 1) {
              x = 250;
              scale = 0.8;
              opacity = 0.4;
              blur = "blur(2px)";
            } else if (offset === 2) {
              x = 450;
              scale = 0.6;
              opacity = 0.2;
              blur = "blur(3px)";
            } else if (offset === testimonials.length - 1) {
              x = -250;
              scale = 0.8;
              opacity = 0.4;
              blur = "blur(2px)";
            } else if (offset === testimonials.length - 2) {
              x = -450;
              scale = 0.6;
              opacity = 0.2;
              blur = "blur(3px)";
            }

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{ x, scale, opacity }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-[260px] md:w-[360px] h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.25)] border border-red-900/30"
                style={{
                  zIndex: isActive ? 5 : 1,
                  filter: blur,
                }}
              >
                {/* Image background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
                {/* Soft gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Bottom text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-red-400 font-semibold text-base leading-none">
                    {item.views}
                  </p>
                  <p className="text-gray-300 text-sm">{item.subs}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-gray-400 text-sm mt-14">
          Trusted by 500+ creators worldwide — powering viral growth every day.
        </p>
      </div>
    </div>
  );
}
