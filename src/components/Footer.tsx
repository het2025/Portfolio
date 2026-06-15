"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-background w-full overflow-hidden py-32">
      {/* Giant decorative logo */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[20vw] md:text-[25vw] font-bold tracking-tighter text-white/[0.03] leading-none">
          HeT
        </span>
      </div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        <nav className="flex items-center gap-8 text-sm font-medium text-white/60">
          <motion.a
            href="https://github.com/het2025"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#00D6FF" }}
            className="hover:underline underline-offset-4 transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/het-patel-4488h3881"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#00D6FF" }}
            className="hover:underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:het@example.com"
            whileHover={{ color: "#00D6FF" }}
            className="hover:underline underline-offset-4 transition-colors"
          >
            Email
          </motion.a>
        </nav>

        <p className="text-white/30 text-xs tracking-widest">
          &copy; 2025 HeT Designed &amp; built with obsession.
        </p>
      </div>
    </footer>
  );
}
