import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scrollToTop"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 50 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed bottom-6 right-6 z-50 
            bg-[#7B6EF6] text-white rounded-full
            shadow-[0_0_20px_rgba(123,110,246,0.4)]
            flex items-center justify-center
            backdrop-blur-sm
            hover:shadow-[0_0_35px_rgba(123,110,246,0.7)]
            hover:bg-[#6c5be8]
            active:scale-90
            transition-all duration-300

            w-14 h-14 md:w-12 md:h-12 sm:w-10 sm:h-10
          "
        >
          <motion.svg
            initial={{ y: 4 }}
            animate={{ y: 0 }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", repeatType: "reverse" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7 sm:w-5 sm:h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
