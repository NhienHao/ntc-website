"use client";

import { useEffect, useState } from "react";

const LEAF_COUNT = 12;

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A15.45 15.45 0 0 0 12 20c6 0 9-4.5 9-10-3 0-4-.5-4-2zM12 4c0 3-1 5-4 6 2-4 3-5 4-6z" />
    </svg>
  );
}

export function LeafParticles() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    setEnabled(!reduce && !mobile);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      {Array.from({ length: LEAF_COUNT }).map((_, i) => {
        const left = 4 + ((i * 17) % 92);
        const delay = (i * 0.9) % 8;
        const duration = 9 + (i % 5) * 1.4;
        const drift = `${(i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 12)}px`;
        const size = 10 + (i % 4) * 3;
        return (
          <span
            key={i}
            className="leaf-particle"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              ["--drift" as string]: drift,
              color: i % 3 === 0 ? "#e6994c" : i % 2 === 0 ? "#0bb14b" : "#085f2b",
            }}
          >
            <LeafIcon />
          </span>
        );
      })}
    </div>
  );
}
