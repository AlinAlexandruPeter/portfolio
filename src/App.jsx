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
import { ScreenProvider } from './context/ScreenProvider'
import { ScreenContext } from './context/screen-context'
import { motion, AnimatePresence } from 'motion/react'
import contactAnimation from './lib/animations/contactAnimation'
import aboutAnimation from './lib/animations/aboutAnimation'

const dynamicTransitions = {
  // How the NEW screen enters
  initial: (targetScreen) => {
    switch (targetScreen) {
      case 'home': 
        return { opacity: 0, scale: 0.9 }; // Starts small and transparent
      case 'contact': 
        return { y: '100%' }; // Starts off-screen bottom
      case 'projects': 
        return { x: '100%', scale: 0.95 }; // Starts off-screen right
      case 'about': 
        return aboutAnimation.initial; // Starts off-screen right
      case 'experience': 
        return { x: '100%', scale: 0.95 }; // Starts off-screen right
    }
  },
  
  // Where the NEW screen rests
  animate: (targetScreen) => {
    switch (targetScreen) {
      case 'home': 
        return { opacity: 1, scale: 1, transition: { duration: 0.4 } };
      case 'contact': 
        return { y: 0, transition: { type: 'spring', bounce: 0, duration: 0.6 } };
      case 'projects': 
        return { 
          x: 0, 
          scale: 1, 
          transition: {
            x: { delay: 0.3, duration: 0.3, ease: "easeInOut" },
            scale: { delay: 0.5, duration: 0.3, ease: "easeOut" }
          }
        };
      case 'about': 
        return aboutAnimation.animate;
      case 'experience': 
        return { 
          x: 0, scale: 1, 
          transition: { x: { duration: 0.4 }, scale: { delay: 0.4, duration: 0.3 } } 
        }
    }
  },
  
  // How the OLD screen leaves (It knows where we are going!)
  exit: (targetScreen) => {
    switch (targetScreen) {
      case 'home': 
        return { opacity: 0, scale: 1.1, transition: { duration: 0.4 } }; // Expands outward
      case 'contact': 
        return { y: '-20%', opacity: 0, transition: { duration: 0.5 } }; // Pushed up slightly
      case 'projects': 
        return { 
          x: '-100%', scale: 0.95, 
          transition: { scale: { duration: 0.2 }, x: { delay: 0.2, duration: 0.4 } } 
        };
      case 'about': 
        return aboutAnimation.exit;
      case 'experience': 
        return { 
          x: '-100%', scale: 0.95, 
          transition: { scale: { duration: 0.2 }, x: { delay: 0.2, duration: 0.4 } } 
        };
    }
  }
};

function App() {
  const { screen, direction } = useContext(ScreenContext);

  const renderScreen = () => {
    switch (screen) {
      case 'home': return <Home />;
      case 'experience': return <Experience />;
      case 'project': return <Project />;
      case 'projects': return <ProjectsGallery />;
      case 'about': return <AboutMe />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className='relative overflow-hidden w-full h-screen bg-white'>
      <MobileNavbar />
      <Navbar />

      <AnimatePresence initial={false} custom={screen}>
        <motion.div
          key={screen} 
          custom={screen}
          
          // 4. Absolute positioning stacks them on top of each other
          className="absolute inset-0 w-full h-full"
          
          variants={dynamicTransitions}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      <Toaster position="bottom-right" />
    </div>
  )
}

export default App
