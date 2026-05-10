import { useState, useEffect } from 'react';
import { motion } from 'motion/react'

function StairTransition({ targetScreen }) {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (targetScreen === 'experience') {
      setPhase('dropping');
      
      const timer = setTimeout(() => setPhase('lifting'), 800);
      return () => clearTimeout(timer);
    } else {
      setPhase('idle');
    }
  }, [targetScreen]);

  if (phase === 'idle') return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-100 flex">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="relative w-full h-full bg-(--third)"
          initial={{ top: '-100%' }}
          animate={{ top: phase === 'dropping' ? '0%' : '100%' }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: phase === 'dropping' ? i * 0.1 : (4 - i) * 0.1, 
          }}
        />
      ))}
    </div>
  );
}

export default StairTransition