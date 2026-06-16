"use client";

import { useRef, useEffect, useState } from "react";
import { useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

interface CanvasSequenceProps {
  scrollYProgress: MotionValue<number>;
}

export default function CanvasSequence({ scrollYProgress }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const frameCount = 240;

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = assetPath(`/keyboard-teardown/ezgif-frame-${paddedIndex}.jpg`);
      const handleLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      img.onload = handleLoad;
      img.onerror = handleLoad;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index - 1];
    if (!img) return;

    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  useEffect(() => {
    if (loaded && canvasRef.current && images.length > 0) {
      renderFrame(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      requestAnimationFrame(() => renderFrame(Math.round(latest)));
    }
  });

  return (
    <div className="sticky top-0 h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 font-medium tracking-widest text-sm">
          <div className="animate-pulse">LOADING SEQUENCE...</div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none scale-[1.15]"
      />
    </div>
  );
}
