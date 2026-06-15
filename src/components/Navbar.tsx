"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const pointerEvents = useTransform(scrollY, [0, 50], ["none", "auto"]);

  if (!isMounted) return null;

  return (
    <motion.nav
      style={{ opacity, pointerEvents }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between transition-opacity"
    >
      <div className="flex items-center gap-2 pointer-events-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">HeT</Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 pointer-events-auto">
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>

      <div className="flex items-center gap-3 pointer-events-auto">
        <a
          href="/resume/Het_Patel_Resume.pdf"
          download
          className="px-5 py-2 rounded-full font-medium text-sm text-white/80 border border-white/20 hover:border-accent-cyan hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M7 1V10M7 10L3.5 6.5M7 10L10.5 6.5M1 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Resume
        </a>
        <button className="relative px-6 py-2 rounded-full font-medium text-sm text-white overflow-hidden group border border-white/20 hover:border-transparent transition-all">
          <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 block pointer-events-none">Hire Me</span>
        </button>
      </div>
    </motion.nav>
  );
}
