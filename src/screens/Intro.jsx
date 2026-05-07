import React from "react";
// src/components/Intro.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Intro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute top-0 left-0 right-0 inset-0 flex items-center justify-center bg-(--third) text-(--primary) z-50"
          style={{ perspective: "800px" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div
                className="text-[160px] font-bold flex origin-center"
                initial={{ scale: 1, rotateY: 0 }}
                animate={{
                    scale: [1, 1.2, 1.6],
                    rotateY: [0, 60, 0],
                    transition: { duration: 1.6, delay: 0.4, ease: "easeInOut" },
                }}
            >
            <motion.span
                initial={{ opacity: 1 }}
                animate={{
                    transition: { delay: 1, duration: 1 },
                }}
            >
                p
            </motion.span>
            <motion.span
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{
                opacity: [0, 1],
                    transition: { delay: 1, duration: 0.6 },
                }}
            >
                eter
            </motion.span>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
