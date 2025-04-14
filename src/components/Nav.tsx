import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
    exit: { opacity: 0, x: -10 },
  };

  return (
    <div className="absolute top-0 left-0 w-full navigation-bar">
      <div className="shadow-md bg-black/50 backdrop-blur text-white z-50 relative">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center">
          
          {/* Hamburger Button (still aligned right) */}
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-200 absolute right-6"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex space-x-6 text-sm md:text-base">
            <a href="#about" className="hover:text-blue-600 transition duration-300">About</a>
            <a href="#projects" className="hover:text-blue-600 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact</a>
          </nav>
        </div>

        {/* Mobile Nav with Animation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className="md:hidden px-6 pb-4 flex flex-col space-y-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['about', 'projects', 'contact'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  className="py-2 text-white hover:text-blue-600"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  transition={{ duration: 0.3 }}
                  onClick={() => setOpen(false)} // Auto-close on link click
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
