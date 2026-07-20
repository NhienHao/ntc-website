"use client";

import { useMemo, useState } from "react";
import { affiliates } from "@/content/affiliates";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function AffiliateList() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("");
  const [field, setField] = useState("");

  const regions = useMemo(
    () => [...new Set(affiliates.map((a) => a.region))],
    [],
  );
  const fields = useMemo(
    () => [...new Set(affiliates.map((a) => a.field))],
    [],
  );

  const filtered = useMemo(() => {
    const nq = normalize(q.trim());
    return affiliates.filter((a) => {
      if (nq && !normalize(a.name).includes(nq)) return false;
      if (region && a.region !== region) return false;
      if (field && a.field !== field) return false;
      return true;
    });
  }, [q, region, field]);

  return (
    <div className="wrap py-10" data-ctlk-list>
      <div className="mb-6 grid gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow)] md:grid-cols-[1fr_auto_auto_auto]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm theo tên công ty"
          className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm"
          aria-label="Tìm theo tên công ty"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm"
          aria-label="Vùng"
        >
          <option value="">Tất cả vùng</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm"
          aria-label="Lĩnh vực"
        >
          <option value="">Tất cả lĩnh vực</option>
          {fields.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <div className="flex items-center text-sm text-[var(--muted)]">
          {filtered.length === 0
            ? "0 dòng"
            : `1 - ${filtered.length} của ${filtered.length} dòng`}
        </div>
      </div>

      <div className="hidden overflow-x-auto rounded-2xl bg-white shadow-[var(--shadow)] md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--green-dark)] text-white">
            <tr>
              <th className="px-4 py-3">STT</th>
              <th className="px-4 py-3">Tên công ty</th>
              <th className="px-4 py-3">Vùng</th>
              <th className="px-4 py-3">Lĩnh vực</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a, i) => (
              <tr key={a.name} className="border-t border-[var(--line)]">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--green-dark)] hover:underline"
                  >
                    {a.name}
                  </a>
                </td>
                <td className="px-4 py-3">{a.region}</td>
                <td className="px-4 py-3">{a.field}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-3 md:hidden">
        {filtered.map((a, i) => (
          <li key={a.name} className="surface-panel p-4">
            <div className="text-xs text-[var(--muted)]">#{i + 1}</div>
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-semibold text-[var(--green-dark)]"
            >
              {a.name}
            </a>
            <div className="mt-2 text-sm text-[var(--muted)]">
              {a.region} · {a.field}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
