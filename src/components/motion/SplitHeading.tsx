"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  as?: "h1" | "h2" | "h3";
  children: string;
  className?: string;
  mode?: "words" | "chars";
};

export function SplitHeading({
  as: Tag = "h2",
  children,
  className,
  mode = "words",
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-inview");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const parts =
    mode === "chars"
      ? Array.from(children)
      : children.split(/(\s+)/).filter(Boolean);

  return (
    <Tag ref={ref} className={cn("split-heading section-title", className)}>
      {parts.map((part, i) => {
        if (mode === "words" && /^\s+$/.test(part)) {
          return <span key={`s-${i}`}> </span>;
        }
        return (
          <span
            key={`${part}-${i}`}
            className={mode === "chars" ? "split-char" : "split-word"}
            aria-hidden
          >
            <span style={{ transitionDelay: `${i * (mode === "chars" ? 18 : 45)}ms` }}>
              {part === " " ? "\u00A0" : part}
            </span>
          </span>
        );
      })}
      <span className="sr-only">{children}</span>
    </Tag>
  );
}
