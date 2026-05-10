import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function IntroSequence({ children }) {
  const [phase, setPhase] = useState('text-reveal');
  const text = "Peter's Portfolio";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: '100%' }, 
    visible: {
      y: 0,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative w-full h-screen bg-(--third) overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.h1
          className="text-white text-7xl md:text-7xl font-serif flex overflow-hidden" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => {
            setTimeout(() => setPhase('circle-expand'), 400);
          }}
        >
          {text.split('').map((char, index) => (
            <span
              key={index}
              className={cn(
                "relative font-[tusker-grotesk] uppercase text-[100px] overflow-hidden inline-flex pt-2 p2",
                '2xl:text-[200px]'
              )}
            >
              <motion.span variants={letterVariants}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        className="absolute inset-0 z-10 w-full h-full bg-secondary"
        initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }}
        animate={{
          clipPath: phase === 'circle-expand' ? [
            'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
            
            'polygon(40% 40%, 60% 40%, 60% 60%, 40% 60%)',

            'polygon(40% 40%, 65% 40%, 60% 60%, 35% 60%)',
            
            'polygon(10% 10%, 120% 10%, 90% 90%, -20% 90%)',
            
            'polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)'
          ] : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
        }}
        
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.8, 1],
          times: [0, 0.5, 0.6, 0.8, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}