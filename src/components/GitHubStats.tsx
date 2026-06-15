"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Repositories", value: 20, suffix: "+" },
  { label: "Contributions", value: 500, suffix: "+" },
  { label: "Top Language", value: 0, display: "TypeScript" },
  { label: "Years Active", value: 2, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function GitHubStats() {
  return (
    <section className="relative z-10 px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center"
        >
          GitHub at a Glance
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-accent-cyan/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.display ? (
                  <span>{stat.display}</span>
                ) : (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-white/50 text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
