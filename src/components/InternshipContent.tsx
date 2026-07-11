"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { internships } from "@/lib/internships";
import { assetPath } from "@/lib/assetPath";
import Image from "next/image";

export default function InternshipContent() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-cyan text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          2 Internships · 8 Months Experience
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl"
        >
          Internship
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/60 max-w-xl"
        >
          Real-world development experience building production-grade applications.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="relative z-10 px-6 md:px-16 lg:px-24 pb-32 max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent -translate-x-1/2 hidden md:block" />

          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative md:grid md:grid-cols-2 gap-12 mb-20 ${
                index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              {/* Timeline dot (desktop) */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_16px_rgba(0,214,255,0.7)] z-10 hidden md:block" />

              {/* Card */}
              <div className={`md:${index % 2 === 0 ? "pr-12" : "pl-12 col-start-2"}`}>
                <div className="bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${intern.color} text-white mb-3`}>
                        {intern.semester}
                      </span>
                      <h2 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {intern.role}
                      </h2>
                      <p className="text-accent-cyan font-medium mt-1">{intern.company}</p>
                      <p className="text-white/40 text-sm mt-1">
                        {intern.duration} · {intern.months}
                      </p>
                    </div>
                  </div>

                  {/* Project */}
                  <div className="mb-6">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-1">Project</p>
                    <p className="text-white/80 font-medium">{intern.project}</p>
                    <p className="text-white/50 text-sm mt-2">{intern.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3">Key Contributions</p>
                    <ul className="space-y-2">
                      {intern.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white/60">
                          <span className="text-accent-cyan mt-0.5 shrink-0">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {intern.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/70 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Letters */}
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3">
                      Official Documents
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {intern.letters.map((letter) => (
                        <button
                          key={letter.label}
                          onClick={() => setLightbox(letter.file)}
                          className="group/img relative overflow-hidden rounded-xl border border-white/10 hover:border-accent-cyan transition-all duration-300 aspect-[3/4] bg-black/40"
                        >
                          <Image
                            src={assetPath(letter.file)}
                            alt={letter.label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                            sizes="200px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-center pb-3">
                            <span className="text-white text-xs font-semibold flex items-center gap-1">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 2H10V10H2V2Z" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M4 6L6 8L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                              </svg>
                              View {letter.label}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternate layout */}
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Mastercard Forage card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-accent-violet/20 to-accent-cyan/10 rounded-3xl border border-accent-cyan/30 p-8 mt-4"
        >
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 border border-orange-500/40 text-orange-400">
              Virtual Internship
            </span>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl shrink-0">
              🔐
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Cybersecurity Job Simulation</h2>
              <p className="text-orange-400 font-medium">Mastercard · via Forage</p>
              <p className="text-white/40 text-sm mt-1">May 2026 · Virtual</p>
            </div>
          </div>
          <ul className="space-y-2 mb-6">
            {[
              "Served as an analyst on Mastercard's Security Awareness Team.",
              "Identified and reported security threats such as phishing across the organization.",
              "Analyzed business areas needing more robust security training and implemented training courses and procedures.",
            ].map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/60">
                <span className="text-accent-cyan mt-0.5 shrink-0">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Communication", "Cybersecurity", "Data Analysis", "Security Awareness", "Strategy"].map((t) => (
              <span key={t} className="px-3 py-1 text-xs bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300 font-medium">
                {t}
              </span>
            ))}
          </div>
          <a
            href={assetPath("/documents/certification/FORAGE/MASTECARD CYBERSECURITY FORAGE.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium hover:bg-orange-500/30 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View Certificate
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 cursor-default"
            >
              <Image
                src={assetPath(lightbox)}
                alt="Internship document"
                width={800}
                height={1100}
                className="object-contain w-full h-auto"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
