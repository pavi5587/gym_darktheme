"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * progress);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatItem({ label, value, suffix }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const current = useCountUp(value, active);
  const display = Number.isInteger(value) ? Math.round(current) : current.toFixed(1);

  return (
    <div ref={ref} className="border-t border-ink-line py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-0 first:sm:border-l-0">
      <p className="font-display text-4xl text-bone sm:text-5xl">
        {display}
        <span className="text-ember">{suffix}</span>
      </p>
      <p className="mt-1 font-body text-sm text-bone-dim">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="container-page">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
