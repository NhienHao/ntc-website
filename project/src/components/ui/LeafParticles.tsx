import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

export function LeafParticles({ count = 12, className = '' }: { count?: number; className?: string }) {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    setLeaves(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 15,
        size: 8 + Math.random() * 16,
        rotation: Math.random() * 360,
        opacity: 0.15 + Math.random() * 0.25,
      }))
    );
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ left: `${leaf.x}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(leaf.id) * 80],
            rotate: [leaf.rotation, leaf.rotation + 360],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: leaf.opacity }}
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10 0-5.5 0-10 0-10S17.5 7 12 2z"
              fill="currentColor"
              className="text-primary-400"
            />
            <path
              d="M12 22V7"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary-600"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
