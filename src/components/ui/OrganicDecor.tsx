export function OrganicDecor({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="organic-blob organic-blob--green absolute -left-24 top-10 h-56 w-56 md:h-72 md:w-72" />
      <div className="organic-blob organic-blob--warm absolute -right-16 bottom-8 h-48 w-48 md:h-64 md:w-64" />
      <svg
        className="absolute right-[8%] top-[18%] h-16 w-16 text-[var(--green)] opacity-[0.12]"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M48 8c-14 2-24 12-28 24 8-2 16 0 22 6 8-10 10-20 6-30zM18 28c8 4 14 12 16 22-10-2-18-8-22-16 2-2 4-4 6-6z" />
      </svg>
      <svg
        className="absolute bottom-[12%] left-[10%] h-12 w-12 rotate-[-20deg] text-[var(--green-dark)] opacity-[0.1]"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 4c0 18-10 28-28 28 18 0 28 10 28 28 0-18 10-28 28-28-18 0-28-10-28-28z" />
      </svg>
    </div>
  );
}
