const aboutAnimation = {
  initial: { x: '100%', scale: 0.95 },
  animate: { 
    x: 0,
    scale: 1,
    transition: {
      x: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
      scale: { delay: 0.7, duration: 0.3, ease: "easeOut" }
    }
  },
  exit: { 
    x: '-100%',
    scale: 0.95,
    transition: {
      scale: { duration: 0.3, ease: "easeOut" },
      x: { delay: 0.3, duration: 0.4, ease: "easeInOut" }
    }
  }
}

export default aboutAnimation