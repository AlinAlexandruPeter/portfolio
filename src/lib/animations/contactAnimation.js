const contactAnimation = {
  initial: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 0.95,
  }),
  
  animate: {
    x: 0,
    scale: 1,
    transition: {
      x: { delay: 0.3, duration: 0.3, ease: "easeInOut" },
      scale: { delay: 0.5, duration: 0.3, ease: "easeOut" }
    }
  },
  
  // Outgoing screen goes here
  exit: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 0.95,
    transition: {
      scale: { duration: 0.2, ease: "easeOut" },
      x: { delay: 0.2, duration: 0.4, ease: "easeInOut" }
    }
  })
}

export default contactAnimation