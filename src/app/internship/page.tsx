import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StaticCanvas from "@/components/StaticCanvas";
import Footer from "@/components/Footer";
import InternshipContent from "@/components/InternshipContent";

export const metadata: Metadata = {
  title: "Internship | HeT — Full Stack Developer",
  description: "Het Patel's internship experience — Full Stack Developer intern at Parul University building real-world web applications with MERN stack and PHP.",
};

export default function InternshipPage() {
  return (
    <main className="bg-background min-h-screen relative">
      <StaticCanvas frame={80} />
      <div className="absolute inset-0 bg-black/60 pointer-events-none fixed -z-[5]" />
      <Navbar />
      <InternshipContent />
      <Footer />
    </main>
  );
}
