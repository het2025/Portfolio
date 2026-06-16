"use client";

import { useRef, useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";

interface StaticCanvasProps {
  frame?: number;
}

export default function StaticCanvas({ frame = 120 }: StaticCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    const paddedIndex = String(frame).padStart(3, "0");
    img.src = assetPath(`/keyboard-teardown/ezgif-frame-${paddedIndex}.jpg`);
    img.onload = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      setLoaded(true);
    };
    img.onerror = () => setLoaded(true);
  }, [frame]);

  return (
    <div className="fixed inset-0 w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden -z-10">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 font-medium tracking-widest text-sm">
          <div className="animate-pulse">LOADING...</div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none scale-[1.15] opacity-40"
      />
    </div>
  );
}
