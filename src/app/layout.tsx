import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HeT Patel | Full Stack Developer",
  description: "Personal portfolio of Het Patel — Full Stack Developer (MERN, Angular, PHP) and cybersecurity enthusiast. IMCA student at Parul University, Vadodara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${inter.className} antialiased scrollbar-hide bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
