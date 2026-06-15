import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HeT | Frontend Creative Developer",
  description: "Personal portfolio of Het, a frontend engineer specializing in stunning, high-performance web experiences.",
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
