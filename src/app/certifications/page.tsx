import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StaticCanvas from "@/components/StaticCanvas";
import Footer from "@/components/Footer";
import CertificationsContent from "@/components/CertificationsContent";

export const metadata: Metadata = {
  title: "Certifications | HeT — Full Stack Developer",
  description: "Het Patel's certifications from Mastercard Forage, Simplilearn, IIT Bombay Spoken Tutorial, Outskill, and more.",
};

export default function CertificationsPage() {
  return (
    <main className="bg-background min-h-screen relative">
      <StaticCanvas frame={160} />
      <div className="absolute inset-0 bg-black/60 pointer-events-none fixed -z-[5]" />
      <Navbar />
      <CertificationsContent />
      <Footer />
    </main>
  );
}
