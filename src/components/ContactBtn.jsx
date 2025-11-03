import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function FloatingContactIcons() {
  const [visible, setVisible] = useState(true);

  const buttonVariants = {
    hover: { scale: 1.2, y: -3 },
    tap: { scale: 0.9 },
  };

  if (!visible) return null; // Hide if not visible

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-50">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="bg-gray-800 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:bg-gray-900 transition"
      >
        <FaTimes size={12} />
      </button>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/8801903855586"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+8801903855586"
        className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <FaPhone size={24} />
      </motion.a>
    </div>
  );
}

export default FloatingContactIcons;
