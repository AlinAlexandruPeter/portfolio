const homeAnimation = {
  initial: { 
    x: '-100%', 
    y: '-100%', 
    rotate: '-10deg' 
  },
  animate: { 
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      x: { delay: 0.2, duration: 0.2, ease: "easeOut" },
      y: { delay: 0.2, duration: 0.2, ease: "easeOut" },
      rotate: { delay: 0.3, duration: 0.1, ease: "easeInOut" }
    }
  },
  exit: { 
    x: '50%',
    y: '30%',
    rotate: '3deg',
    opacity: '70%',
    transition: {
      x: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      y: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      rotate: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      opacity: { delay: 0.2, duration: 0.5, ease: "easeOut" },
    }
  }
}

export default homeAnimation