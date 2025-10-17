import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Work", id: "work" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
        scrolled ? "border-red-900/30" : "border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <div>
          <img
            src="./sitelogo.png"
            alt="logo"
            className="w-28 md:w-40 select-none"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-6 text-lg text-white">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActive(link.id)}
                    className={`transition-colors duration-300 ${
                      active === link.id
                        ? "text-red-500 font-semibold"
                        : "hover:text-red-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Book Call Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className={`text-base px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
                : "bg-white/10 text-white border border-white/20 hover:bg-red-600 hover:text-white"
            }`}
          >
            BOOK A CALL
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 text-white py-6 border-t border-red-900/30"
          >
            <ul className="flex flex-col items-center space-y-6 text-lg">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.id);
                      setMenuOpen(false);
                    }}
                    className={`transition-colors duration-300 ${
                      active === link.id
                        ? "text-red-500 font-semibold"
                        : "hover:text-red-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://calendly.com/noorrk042/30min"
                  className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-white hover:text-red-600 duration-300 "
                >
                  BOOK A CALL
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
