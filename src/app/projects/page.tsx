import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StaticCanvas from "@/components/StaticCanvas";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectGrid from "@/components/ProjectGrid";
import GitHubStats from "@/components/GitHubStats";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects | HeT — Frontend Creative Developer",
  description: "Explore HeT's portfolio of high-performance web experiences, cybersecurity platforms, and creative frontend projects.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background min-h-screen relative">
      <StaticCanvas frame={120} />
      <div className="absolute inset-0 bg-black/50 pointer-events-none fixed -z-[5]" />
      <Navbar />
      <ProjectsHero />
      <ProjectGrid />
      <GitHubStats />
      <Footer />
    </main>
  );
}
