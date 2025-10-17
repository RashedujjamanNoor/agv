import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0000] via-black to-black text-gray-400 border-t border-red-900/20 py-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(239,68,68,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white">
            Vidly<span className="text-red-500">Pro</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Empowering creators with next-level video editing & content
            strategy.
          </p>
        </motion.div>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-center space-x-6 text-sm"
        >
          <li>
            <a href="#home" className="hover:text-red-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-red-500 transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#success" className="hover:text-red-500 transition-colors">
              Success
            </a>
          </li>
          <li>
            <a href="#review" className="hover:text-red-500 transition-colors">
              Reviews
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-red-500 transition-colors">
              Why us
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-red-500 transition-colors">
              FAQ
            </a>
          </li>
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end space-x-5 text-xl"
        >
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-8 border-t border-red-900/10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">VidlyPro</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
