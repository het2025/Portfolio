"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      className={`group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_0_40px_rgba(107,0,255,0.15)] ${
        project.featured ? "md:col-span-2 md:row-span-1" : ""
      }`}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(107,0,255,0.3), rgba(0,214,255,0.3))",
          padding: "1px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={`object-cover ${
            project.id === "vajra-platform"
              ? "animate-scroll-y"
              : "transition-transform duration-500 group-hover:scale-105"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm md:text-base mb-4 line-clamp-2">
          {project.subtitle}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/70 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/40 font-medium">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
