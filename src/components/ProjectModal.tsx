"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import Image from "next/image";
import { useEffect } from "react";
import { assetPath } from "@/lib/assetPath";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-4 md:inset-10 lg:inset-16 z-[101] overflow-y-auto rounded-3xl bg-[#0A0A0C] border border-white/10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Hero image */}
            <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
              <Image
                src={assetPath(project.thumbnail)}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative px-8 md:px-16 pb-16 -mt-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 drop-shadow-lg">
                {project.title}
              </h2>
              <p className="text-lg text-accent-cyan font-medium mb-8">
                {project.subtitle}
              </p>

              {/* Description */}
              <div className="max-w-3xl mb-10">
                <p className="text-white/70 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-10">
                <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4 font-medium">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-8 py-3 rounded-full font-bold text-white overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">View Live</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full font-bold text-white/80 border border-white/20 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all"
                  >
                    View Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
