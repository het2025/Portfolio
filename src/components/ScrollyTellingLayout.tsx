"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import CanvasSequence from "./CanvasSequence";
import StoryOverlays from "./StoryOverlays";

export default function ScrollyTellingLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <CanvasSequence scrollYProgress={scrollYProgress} />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <StoryOverlays scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
