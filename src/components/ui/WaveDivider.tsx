type Props = {
  flip?: boolean;
  variant?: "wave" | "leaf";
  from?: string;
  to?: string;
};

export function WaveDivider({
  flip = false,
  variant = "wave",
  from = "var(--bg)",
  to = "transparent",
}: Props) {
  if (variant === "leaf") {
    return (
      <div
        className={`relative h-16 w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
        aria-hidden
        style={{ background: from }}
      >
        <svg
          className="absolute inset-x-0 bottom-0 h-full w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 48c80-28 160-40 240-28s160 40 240 36 160-32 240-36 160 16 240 28 160 12 240 0 160-40 240-44v76H0V48z"
            fill={to === "transparent" ? "var(--surface)" : to}
            opacity="0.9"
          />
          <path
            d="M0 56c96-20 180-36 280-24s180 40 280 32 180-36 280-28 180 40 280 36 180-28 320-40v48H0V56z"
            fill="var(--green)"
            opacity="0.12"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative h-14 w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      aria-hidden
      style={{ color: from }}
    >
      <svg
        className="block h-full w-full"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C180,64 360,0 540,24 C720,48 900,64 1080,40 C1260,16 1350,8 1440,28 L1440,64 L0,64 Z"
          fill="currentColor"
        />
        <path
          d="M0,40 C200,8 400,56 600,32 C800,8 1000,0 1200,28 C1320,44 1380,48 1440,36"
          stroke="var(--green)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
