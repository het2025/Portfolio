"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const pointerEvents = useTransform(scrollY, [0, 50], ["none", "auto"]);

  if (!isMounted) return null;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/internship", label: "Internship" },
    { href: "/certifications", label: "Certifications" },
  ];

  return (
    <motion.nav
      style={{ opacity, pointerEvents }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between transition-opacity"
    >
      <div className="flex items-center gap-2 pointer-events-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">HeT</Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 pointer-events-auto">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-3 pointer-events-auto">
        <a
          href={assetPath("/resume/Het_Patel_Resume.pdf")}
          download
          className="px-5 py-2 rounded-full font-medium text-sm text-white/80 border border-white/20 hover:border-accent-cyan hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M7 1V10M7 10L3.5 6.5M7 10L10.5 6.5M1 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Resume
        </a>
        <a
          href="mailto:het416901@gmail.com"
          className="relative px-6 py-2 rounded-full font-medium text-sm text-white overflow-hidden group border border-white/20 hover:border-transparent transition-all"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 block pointer-events-none">Hire Me</span>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden pointer-events-auto text-white/70 hover:text-white transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {mobileOpen ? (
            <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 pointer-events-auto md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:het416901@gmail.com"
            className="mt-2 text-center px-6 py-2 rounded-full font-medium text-sm text-white bg-gradient-to-r from-accent-violet to-accent-cyan"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
