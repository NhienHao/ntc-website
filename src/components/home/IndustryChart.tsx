"use client";

import { useEffect, useRef } from "react";
import { industryShare } from "@/content/site";

export function IndustryChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 420;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = "100%";
    canvas.style.maxWidth = `${size}px`;
    canvas.style.height = "auto";
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const outer = Math.min(cx, cy) - 36;
    const inner = outer * 0.55;
    let start = -Math.PI / 2;

    industryShare.forEach((d) => {
      const angle = (d.value / 100) * Math.PI * 2;
      const mid = start + angle / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, outer, start, start + angle);
      ctx.arc(cx, cy, inner, start + angle, start, true);
      ctx.closePath();
      ctx.fillStyle = d.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,.2)";
      ctx.lineWidth = 2;
      ctx.stroke();

      const lx = cx + Math.cos(mid) * (outer + 18);
      const ly = cy + Math.sin(mid) * (outer + 18);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 11px Be Vietnam Pro, sans-serif";
      ctx.textAlign = lx >= cx ? "left" : "right";
      ctx.fillText(d.label, lx, ly);
      ctx.fillText(`${d.value}%`, lx, ly + 13);
      start += angle;
    });

    ctx.beginPath();
    ctx.arc(cx, cy, inner - 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,.12)";
    ctx.fill();
  }, []);

  return (
    <canvas
      ref={ref}
      width={420}
      height={420}
      aria-label="Biểu đồ tỷ lệ ngành nghề"
      className="mx-auto"
    />
  );
}
