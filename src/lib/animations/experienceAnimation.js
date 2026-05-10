const experienceAnimation = {
  initial: { opacity: 0, scale: 1, x: 0, y: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      delay: 0.8, 
      duration: 0.01 
    } 
  },
  exit: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    y: 0, 
    transition: { duration: 0.8 } 
  }
}

export default experienceAnimation