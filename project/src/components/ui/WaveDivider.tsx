interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

export function WaveDivider({ flip = false, color = '#faf9f7', className = '' }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[60px] md:h-[80px] lg:h-[120px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function OrganicDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[40px] md:h-[60px] lg:h-[80px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C180,80 360,0 540,30 C720,60 900,10 1080,40 C1260,70 1380,20 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
          className="text-sand-50"
        />
      </svg>
    </div>
  );
}
