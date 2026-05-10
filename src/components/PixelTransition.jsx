import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const COLUMNS = 12;
const ROWS = 12;
const TOTAL_BLOCKS = COLUMNS * ROWS;

const randomDelays = Array.from({ length: TOTAL_BLOCKS }, () => Math.random() * 0.4);

export default function PixelTransition({ targetScreen }) {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (targetScreen === 'contact') {
      setPhase('filling');
      
      const clearTimer = setTimeout(() => setPhase('clearing'), 800);
      const idleTimer = setTimeout(() => setPhase('idle'), 1600);

      return () => {
        clearTimeout(clearTimer);
        clearTimeout(idleTimer);
      };
    }
  }, [targetScreen]);

  if (phase === 'idle') return null;

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-100 grid"
      style={{
        gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`
      }}
    >
      {[...Array(TOTAL_BLOCKS)].map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-full bg-(--third) origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: phase === 'filling' ? 1.05 : 0 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
            delay: randomDelays[i],
          }}
        />
      ))}
    </div>
  );
}