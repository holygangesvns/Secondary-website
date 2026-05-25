'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Stay', href: '#stay' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* FLOATING GRADIENT GLOW */}
      <div
        className={clsx(
          'fixed top-0 left-1/2 -translate-x-1/2 z-40 h-32 w-[70%] rounded-full blur-3xl transition-all duration-700 pointer-events-none',
          scrolled
            ? 'bg-[#E08A2E]/10 opacity-100'
            : 'bg-[#12344D]/20 opacity-60'
        )}
      />

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500',
          scrolled ? 'py-2' : 'py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div
            className={clsx(
              'relative flex items-center justify-between rounded-2xl border transition-all duration-500',
              scrolled
                ? `
                  border-[#E08A2E]/20
                  bg-[#12344D]/75
                  backdrop-blur-2xl
                  shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                `
                : `
                  border-transparent
                  bg-transparent
                `
            )}
          >
            {/* INNER LIGHT BORDER */}
            <div
              className={clsx(
                'absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none',
                scrolled
                  ? 'opacity-100 border border-white/5'
                  : 'opacity-0'
              )}
            />

            {/* LEFT */}
            <div className="flex items-center gap-3 px-5 py-3">
              {/* LOGO */}
              <motion.div
                animate={{
                  scale: scrolled ? 0.92 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-[#E08A2E]/20 blur-xl" />

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E08A2E]/30
                    bg-[#E08A2E]/10
                    backdrop-blur-md
                  "
                >
                  🌊
                </div>
              </motion.div>

              {/* BRAND */}
              <div className="flex flex-col leading-tight">
                <span
                  className={clsx(
                    'font-serif text-xl tracking-wide transition-colors duration-500',
                    scrolled ? 'text-white' : 'text-white'
                  )}
                >
                  Holy Ganges
                </span>

                <span
                  className={clsx(
                    'text-[10px] uppercase tracking-[0.3em] transition-colors duration-500',
                    scrolled
                      ? 'text-[#F4E8D5]/70'
                      : 'text-white/70'
                  )}
                >
                  Varanasi Experiences
                </span>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white/85
                    transition-all
                    duration-300
                    hover:text-white
                  "
                >
                  {/* HOVER BACKGROUND */}
                  <span
                    className="
                      absolute
                      inset-0
                      scale-90
                      rounded-xl
                      bg-white/5
                      opacity-0
                      blur-sm
                      transition-all
                      duration-300
                      group-hover:scale-100
                      group-hover:opacity-100
                    "
                  />

                  {/* TEXT */}
                  <span className="relative z-10">{item.label}</span>

                  {/* UNDERLINE */}
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-[#E08A2E]
                      transition-all
                      duration-300
                      group-hover:w-8
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + MOBILE BUTTON */}
            <div className="flex items-center gap-3 px-5 py-3">
              {/* CTA */}
              <button
                className="
                  hidden
                  md:inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#E08A2E]/30
                  bg-[#E08A2E]
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  shadow-[#E08A2E]/20
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[#E08A2E]/40
                "
              >
                Book Stay
              </button>

              {/* MOBILE MENU */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  backdrop-blur-md
                  md:hidden
                "
              >
                {mobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="md:hidden px-4 mt-3"
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#12344D]/90
                  backdrop-blur-2xl
                  shadow-2xl
                "
              >
                <div className="flex flex-col p-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="
                        rounded-xl
                        px-4
                        py-3
                        text-white/85
                        transition-all
                        duration-300
                        hover:bg-white/5
                        hover:text-white
                      "
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <button
                    className="
                      mt-3
                      rounded-xl
                      bg-[#E08A2E]
                      px-4
                      py-3
                      font-medium
                      text-white
                    "
                  >
                    Book Your Stay
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
