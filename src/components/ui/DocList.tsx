"use client";

import { useMemo, useState } from "react";
import { Calendar, FileDown } from "lucide-react";
import type { DocItem } from "@/content/documents";

type Props = {
  years: readonly string[];
  items: readonly DocItem[];
};

export function DocList({ years, items }: Props) {
  const [year, setYear] = useState("");

  const filtered = useMemo(
    () => (year ? items.filter((d) => d.year === year) : items),
    [items, year],
  );

  return (
    <div className="wrap py-10">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <label htmlFor="doc-year" className="text-sm font-semibold text-[var(--muted)]">
          Năm
        </label>
        <select
          id="doc-year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm"
        >
          <option value="">Tất cả các năm</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-3">
        {filtered.map((doc, i) => (
          <li
            key={`${doc.href}-${i}`}
            className="surface-panel flex flex-col gap-3 p-4 sm:flex-row sm:items-center"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--green-soft)] text-sm font-bold text-[var(--green-dark)]">
              {i + 1}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold text-[var(--ink)]">{doc.title}</h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]">
                <Calendar size={14} aria-hidden />
                {doc.date}
              </p>
            </div>
            <a
              href={doc.href}
              download
              className="btn-primary justify-center sm:shrink-0"
              title={doc.href.split("/").pop()}
            >
              <span>Tải về</span>
              <FileDown size={16} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
