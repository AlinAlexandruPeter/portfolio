import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import AboutMe from './screens/AboutMe'
import Contact from './screens/Contact'
import Experience from './screens/Experience'
import Home from './screens/Home'
import Intro from './screens/Intro'
import Project from './screens/Project'
import ProjectsGallery from './screens/ProjectsGallery'
import { ScreenContext } from './context/screen-context'
import { motion, AnimatePresence } from 'motion/react'
import contactAnimation from './lib/animations/contactAnimation'
import aboutAnimation from './lib/animations/aboutAnimation'
import projectsAnimation from './lib/animations/projectsAnimation'
import StairTransition from './components/StarsTransition'
import PixelTransition from './components/PixelTransition'
import experienceAnimation from './lib/animations/experienceAnimation'
import homeAnimation from './lib/animations/homeAnimation'
import IntroSequence from './components/IntroSequence'

const dynamicTransitions = {
  initial: (targetScreen) => {
    switch (targetScreen) {
      case 'home': 
        return homeAnimation.initial
      case 'contact': 
        return contactAnimation.initial
      case 'projects': 
        return projectsAnimation.initial
      case 'about': 
        return aboutAnimation.initial
      case 'experience': 
        return experienceAnimation.initial
    }
  },
  
  animate: (targetScreen) => {
    switch (targetScreen) {
      case 'home': 
        return homeAnimation.animate
      case 'contact': 
        return contactAnimation.animate
      case 'projects': 
        return projectsAnimation.animate
      case 'about': 
        return aboutAnimation.animate
      case 'experience': 
        return experienceAnimation.animate
    }
  },
  
  exit: (targetScreen) => {
    switch (targetScreen) {
      case 'home': 
        return homeAnimation.exit
      case 'contact': 
        return contactAnimation.exit
      case 'projects': 
        return projectsAnimation.exit
      case 'about': 
        return aboutAnimation.exit
      case 'experience': 
        return experienceAnimation.exit
    }
  }
}

function App() {
  const { screen } = useContext(ScreenContext)

  const renderScreen = () => {
    switch (screen) {
      case 'home': return <Home />
      case 'experience': return <Experience />
      case 'project': return <Project />
      case 'projects': return <ProjectsGallery />
      case 'about': return <AboutMe />
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <IntroSequence>
      <div className='relative overflow-hidden w-full h-screen bg-secondary'>
        <MobileNavbar />
        <Navbar />

        <AnimatePresence initial={false} custom={screen}>
          <motion.div
            key={screen} 
            custom={screen}
            className="absolute inset-0 w-full h-full"
            variants={dynamicTransitions}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>

        <StairTransition targetScreen={screen} />
        <PixelTransition targetScreen={screen} />

        <Toaster position="bottom-right" />
      </div>
    </IntroSequence>
  )
}

export default App
