"use client";

import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+918448266069"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-xl transition-all duration-300

          bg-green-500 text-white

          dark:bg-[#111111]
          dark:border dark:border-green-500/40
          dark:text-green-400
        "
      >
        <FaWhatsapp size={28} />
      </motion.a>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            type="button"
            aria-label="Scroll to Top"
            initial={{ opacity: 0, y: 30, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="
              w-12 h-12 rounded-full
             border border-border text-foreground hover:bg-secondary transition-colors hover:glow
              flex items-center justify-center gradient-text
              shadow-lg
            "
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
