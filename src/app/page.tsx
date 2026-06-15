import Navbar from "@/components/Navbar";
import ScrollyTellingLayout from "@/components/ScrollyTellingLayout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <ScrollyTellingLayout />
      <Footer />
    </main>
  );
}
