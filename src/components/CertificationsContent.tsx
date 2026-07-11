"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { certifications } from "@/lib/certifications";
import { assetPath } from "@/lib/assetPath";

const categoryColors: Record<string, string> = {
  Security: "from-red-500/20 to-orange-500/20 border-orange-500/30 text-orange-300",
  "AI/ML": "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300",
  "Web Dev": "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300",
  Marketing: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300",
  Systems: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-emerald-300",
  Networking: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300",
  Testing: "from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-300",
};

const categoryIcons: Record<string, string> = {
  Security: "🔐",
  "AI/ML": "🤖",
  "Web Dev": "🌐",
  Marketing: "📈",
  Systems: "🐧",
  Networking: "🌐",
  Testing: "🧪",
};

const allCategories = ["All", ...Array.from(new Set(certifications.map((c) => c.category)))];

export default function CertificationsContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

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
          {certifications.length} Certifications · Multiple Platforms
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl"
        >
          Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/60 max-w-xl"
        >
          Continuous learning across cybersecurity, AI, web development, and beyond.
        </motion.p>
      </section>

      <section className="relative z-10 px-6 md:px-16 lg:px-24 pb-32 max-w-6xl mx-auto">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-accent-cyan/20 border-accent-cyan text-accent-cyan"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {cat === "All" ? "🗂 All" : `${categoryIcons[cat] ?? "📄"} ${cat}`}
            </button>
          ))}
        </motion.div>

        {/* Highlighted Card (Mastercard) */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <a
              href={assetPath(certifications[0].file)}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-accent-violet/10 to-accent-cyan/10 p-8 hover:border-orange-500/70 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-3xl shrink-0">
                  🏅
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 border border-orange-500/40 text-orange-400">
                      ⭐ Featured
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 border border-red-500/20 text-red-300">
                      Security
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    {certifications[0].name}
                  </h3>
                  <p className="text-orange-400 font-medium text-sm mt-1">{certifications[0].issuer}</p>
                  <p className="text-white/50 text-sm mt-2 max-w-2xl">{certifications[0].description}</p>
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-medium shrink-0 group-hover:gap-4 transition-all">
                  View Certificate
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered
            .filter((cert) => !(activeCategory === "All" && cert.highlight))
            .map((cert, index) => {
              const colorClass = categoryColors[cert.category] ?? "from-white/5 to-white/5 border-white/10 text-white/60";
              const icon = categoryIcons[cert.category] ?? "📄";
              return (
                <motion.a
                  key={cert.id}
                  href={assetPath(cert.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(107,0,255,0.1)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} border flex items-center justify-center text-xl`}>
                      {icon}
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${colorClass} border`}>
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors mb-1 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-accent-cyan/80 text-xs font-medium mb-2">{cert.issuer}</p>
                  <p className="text-white/40 text-xs line-clamp-2">{cert.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-white/30 text-xs">{cert.date}</span>
                    <span className="flex items-center gap-1 text-white/30 text-xs group-hover:text-accent-cyan transition-colors">
                      View PDF
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 8L8 2M8 2H5M8 2V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </motion.a>
              );
            })}
        </div>

        {/* Research Publication */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 relative overflow-hidden rounded-3xl border border-accent-violet/30 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/5 p-8"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-violet/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-violet/20 border border-accent-violet/30 flex items-center justify-center text-2xl shrink-0">
                📄
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent-violet/20 border border-accent-violet/40 text-accent-cyan">
                  Scopus-Indexed Research Paper
                </span>
                <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                  Athlete Injury Risk Forecasting: A Review of Machine Learning Pipelines, Wearable Integration, and Ethical Governance in Sports Science
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Published In</p>
                <p className="text-white/80 font-medium">IJDDT (Scopus-Indexed)</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Volume / Issue</p>
                <p className="text-white/80 font-medium">Vol. 16, Issue 54s, 2026 · Pages 441–459</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">DOI</p>
                <a
                  href="https://doi.org/10.25258/ijddt.16.54s.40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan font-medium hover:underline"
                >
                  10.25258/ijddt.16.54s.40
                </a>
              </div>
            </div>
            <p className="text-white/40 text-sm mt-3">
              Co-Authors: Het Patel, Om Bhatt, Dhruv Rajput, Uday Suresh Kamdi
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
