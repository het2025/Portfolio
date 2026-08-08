"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const terminalLines = [
  "> loading het.config.js...",
  "> mode: cybersecurity_analyst",
  "> skills: networking, ethical_hacking, SIEM, Linux",
  "> status: actively seeking security roles",
  "> background: full_stack_dev → offensive_security",
];

const experienceData = [
  {
    year: "Dec 2025 – Apr 2026",
    role: "Full Stack Developer Intern",
    company: "Parul University (Final Sem)",
    desc: "Built QuickBite — a Swiggy/Zomato-scale MERN platform with 4 portals, real-time Socket.IO tracking, and Azure deployment.",
  },
  {
    year: "Dec 2024 – Apr 2025",
    role: "Full Stack Developer Intern",
    company: "Parul University (Sem 6)",
    desc: "Developed a clothing e-commerce site with PHP, MySQL, REST APIs, secure authentication, and SQL injection prevention.",
  },
  {
    year: "May 2026",
    role: "Cybersecurity Analyst (Virtual)",
    company: "Mastercard · Forage",
    desc: "Identified phishing threats and implemented security awareness training on Mastercard's Security Awareness Team.",
  },
];

const certifications = [
  { name: "Mastercard Cybersecurity", org: "Forage" },
  { name: "Intro to AI", org: "Simplilearn" },
  { name: "Linux Training", org: "IIT Bombay" },
];

interface StoryOverlaysProps {
  scrollYProgress: MotionValue<number>;
}

export default function StoryOverlays({ scrollYProgress }: StoryOverlaysProps) {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => setMounted(true), []);

  // ── 6-section scroll map (600vh) ──────────────────────────────
  // Hero:       0.00 – 0.10
  // Skills:     0.12 – 0.28
  // Experience: 0.30 – 0.46
  // Projects:   0.48 – 0.64
  // About:      0.66 – 0.82
  // Tail:       0.82 – 1.00

  // Hero (0.00 – 0.10)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.06, 0.10, 0.11], [1, 1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.10], [0, -50]);
  const heroVis = useTransform(scrollYProgress, (v: number) => (v <= 0.11 ? "visible" : "hidden"));

  // Skills (0.12 – 0.28)
  const skillsOpacity = useTransform(scrollYProgress, [0.11, 0.12, 0.20, 0.26, 0.28, 0.29], [0, 0, 1, 1, 0, 0]);
  const skillsY = useTransform(scrollYProgress, [0.12, 0.20, 0.28], [50, 0, -50]);
  const skillsVis = useTransform(scrollYProgress, (v: number) => (v >= 0.11 && v <= 0.29 ? "visible" : "hidden"));

  // Experience (0.30 – 0.46)
  const expOpacity = useTransform(scrollYProgress, [0.29, 0.30, 0.38, 0.44, 0.46, 0.47], [0, 0, 1, 1, 0, 0]);
  const expY = useTransform(scrollYProgress, [0.30, 0.38, 0.46], [50, 0, -50]);
  const expVis = useTransform(scrollYProgress, (v: number) => (v >= 0.29 && v <= 0.47 ? "visible" : "hidden"));

  // Projects (0.48 – 0.64)
  const projOpacity = useTransform(scrollYProgress, [0.47, 0.48, 0.56, 0.62, 0.64, 0.65], [0, 0, 1, 1, 0, 0]);
  const projY = useTransform(scrollYProgress, [0.48, 0.56, 0.64], [50, 0, -50]);
  const projVis = useTransform(scrollYProgress, (v: number) => (v >= 0.47 && v <= 0.65 ? "visible" : "hidden"));

  // About (0.66 – 0.82)
  const aboutOpacity = useTransform(scrollYProgress, [0.65, 0.66, 0.74, 0.80, 0.82, 0.83], [0, 0, 1, 1, 0, 0]);
  const aboutY = useTransform(scrollYProgress, [0.66, 0.74, 0.82], [50, 0, -50]);
  const aboutVis = useTransform(scrollYProgress, (v: number) => (v >= 0.65 && v <= 0.83 ? "visible" : "hidden"));

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* ── Hero ── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, visibility: heroVis }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 will-change-transform z-10 isolation-isolate"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">Hi, I&apos;m HeT</h1>
        <p className="text-xl md:text-2xl text-accent-cyan font-medium mb-4 drop-shadow-md">Full Stack Developer → Cybersecurity</p>
        <p className="text-lg md:text-xl text-white/60 max-w-md drop-shadow-md">I build secure applications and am diving deep into ethical hacking, threat analysis & offensive security.</p>
        <div className="flex gap-3 mt-6 pointer-events-auto">
          <Link href="/projects" className="px-5 py-2 rounded-full text-sm font-medium border border-white/20 text-white/80 hover:border-accent-cyan hover:text-white transition-all">
            View Projects →
          </Link>
          <Link href="/internship" className="px-5 py-2 rounded-full text-sm font-medium bg-accent-violet/20 border border-accent-violet/40 text-accent-cyan hover:bg-accent-violet/30 transition-all">
            My Experience
          </Link>
        </div>
      </motion.div>

      {/* ── Skills ── */}
      <motion.div
        style={{ opacity: skillsOpacity, y: skillsY, visibility: skillsVis }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-10 md:px-24 will-change-transform z-20 isolation-isolate"
      >
        <div className="max-w-xl bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 drop-shadow-lg">Breaking barriers. Building defences.</h2>
          <p className="text-sm text-accent-cyan font-mono mb-4 tracking-wider">▸ Cybersecurity</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {["Ethical Hacking", "Penetration Testing", "Network Security", "Linux", "SIEM", "Phishing Analysis", "Threat Intelligence", "OSINT"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm font-medium backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-sm text-accent-cyan font-mono mb-3 tracking-wider">▸ Full Stack Background</p>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Next.js", "Node.js", "Python", "MongoDB", "Azure"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm font-medium backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-lg text-white/60 drop-shadow-md mt-6">Dev roots → Security mindset. I understand how things are built, so I know how they break.</p>
        </div>
      </motion.div>

      {/* ── Experience Timeline ── */}
      <motion.div
        style={{ opacity: expOpacity, y: expY, visibility: expVis }}
        className="absolute inset-0 flex flex-col items-end justify-center text-left px-10 md:px-24 will-change-transform z-25 isolation-isolate"
      >
        <div className="max-w-xl bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">Experience</h2>
          <div className="relative pl-6">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent" />

            {experienceData.map((exp, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,214,255,0.6)]" />
                <span className="text-accent-cyan text-xs font-mono tracking-wider">{exp.year}</span>
                <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
                <span className="text-white/40 text-sm">{exp.company}</span>
                <p className="text-white/60 text-sm mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/internship"
            className="inline-block mt-4 text-accent-cyan text-sm font-medium hover:underline underline-offset-4 transition-all pointer-events-auto"
          >
            View full internship details →
          </Link>
        </div>
      </motion.div>

      {/* ── Projects ── */}
      <motion.div
        style={{ opacity: projOpacity, y: projY, visibility: projVis }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-10 md:px-24 will-change-transform z-30 isolation-isolate"
      >
        <div className="max-w-xl bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-lg text-right">Featured Projects</h2>

          <div className="space-y-4">
            <div className="group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 pointer-events-auto">
              <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">VAJRA Cyber Platform</h3>
              <p className="text-white/60 text-sm mt-1">India&apos;s first citizen-facing fraud intelligence dashboard with interactive maps.</p>
            </div>

            <div className="group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 pointer-events-auto">
              <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">QuickBite Food Platform</h3>
              <p className="text-white/60 text-sm mt-1">Swiggy/Zomato-scale MERN ecosystem with 4 portals, real-time tracking & Azure deploy.</p>
            </div>

            <div className="group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 pointer-events-auto">
              <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">Aura87 Scrollytelling</h3>
              <p className="text-white/60 text-sm mt-1">Apple-style scroll sequence using HTML5 Canvas &amp; Framer Motion.</p>
            </div>
          </div>

          <Link
            href="/projects"
            className="inline-block mt-6 text-accent-cyan text-sm font-medium hover:underline underline-offset-4 transition-all pointer-events-auto"
          >
            View all projects &rarr;
          </Link>
        </div>
      </motion.div>

      {/* ── About + Certifications ── */}
      <motion.div
        style={{ opacity: aboutOpacity, y: aboutY, visibility: aboutVis }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-10 md:px-24 will-change-transform z-40 isolation-isolate"
      >
        <div className="max-w-xl bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">Security-First Mindset.</h2>
          <p className="text-lg md:text-xl text-white/80 drop-shadow-md mb-4">Full Stack Developer pivoting into Cybersecurity. I bring a developer&apos;s perspective to security — understanding systems from the inside out.</p>
          <p className="text-md text-white/60 drop-shadow-md mb-6">IMCA @ Parul University · Vadodara, Gujarat · Seeking Cybersecurity Roles</p>

          {/* Certifications */}
          <div className="flex flex-wrap gap-3 mb-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-4 py-3 bg-white/5 border-l-2 border-accent-cyan rounded-lg"
              >
                <span className="text-lg">🏅</span>
                <div>
                  <p className="text-white/90 text-sm font-medium leading-tight">{cert.name}</p>
                  <p className="text-white/40 text-xs">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/certifications"
            className="inline-block text-accent-cyan text-sm font-medium hover:underline underline-offset-4 transition-all pointer-events-auto"
          >
            View all 11 certifications →
          </Link>
        </div>
      </motion.div>

      {/* ── Terminal Easter Egg ── */}
      <div
        className="absolute bottom-8 left-8 z-50 pointer-events-auto isolation-isolate hidden md:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-sm w-80 shadow-2xl overflow-hidden min-h-[120px] transition-all">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>

          <div className="text-accent-cyan flex flex-col gap-1">
            {isHovered ? (
              terminalLines.map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: lineIndex * 0.8 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: lineIndex * 0.8 + charIndex * 0.02 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              ))
            ) : (
              <div className="text-white/40">
                <span className="text-accent-cyan">{">"}</span> hover to initialize...
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-accent-cyan ml-1 align-middle"
                />
              </div>
            )}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: terminalLines.length * 0.8 }}
                className="mt-1"
              >
                <span className="text-accent-cyan">{">"}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-accent-cyan ml-1 align-middle"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
