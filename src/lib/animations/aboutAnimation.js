const aboutAnimation = {
  initial: { x: '100%', scale: 0.95, borderRadius: '24px' },
  animate: { 
    x: 0,
    scale: 1,
    transition: {
      x: { delay: 0.2, duration: 0.3, ease: "easeInOut" },
      scale: { delay: 0.5, duration: 0.2, ease: "easeOut" },
      borderRadius: { delay: 0.5, duration: 0.2, ease: "easeOut" }
    }
  },
  exit: { 
    x: '-100%',
    scale: 0.95,
    transition: {
      scale: { duration: 0.2, ease: "easeOut" },
      borderRadius: { duration: 0.2, ease: "easeOut" },
      x: { delay: 0.2, duration: 0.3, ease: "easeInOut" }
    }
  }
}

export default aboutAnimation