import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
    exit: { opacity: 0, x: -10 },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="absolute top-0 left-0 w-full navigation-bar">
      <div className="shadow-md bg-black/50 backdrop-blur text-white z-50 relative">
        <div className="container mx-auto px-6 py-2 relative flex items-center justify-between">
          
          {/* Logo - Aligned Left */}
          <Link
            to="/"
            className="flex items-center space-x-2 relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              src="/JohnaMarkPersonalWebsite/assets/images/logo.png"
              alt="Logo"
              className="h-8 w-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <motion.div
              className="flex items-center space-x-2"
              variants={containerVariants}
              initial="hidden"
              animate={isHovered ? 'visible' : 'hidden'}
            >
              <div className="h-6 w-px bg-white opacity-50" />
              <img
                src="/JohnaMarkPersonalWebsite/assets/images/bubu.png"
                alt="Divider Logo"
                className="h-8 w-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </motion.div>
          </Link>

          {/* Centered Nav (Desktop only) */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 text-sm md:text-base">
            <Link to="/projects" className="hover:text-sky-300 transition duration-300">Projects</Link>
            <Link to="/contact" className="hover:text-sky-300 transition duration-300">Contact</Link>
          </nav>

          {/* Hamburger Menu (Right) */}
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-200"
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className="md:hidden px-6 pb-4 flex flex-col space-y-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { label: 'Projects', path: '/projects' },
                { label: 'Contact', path: '/contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="py-2 text-white hover:text-blue-600 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
