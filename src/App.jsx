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

function App() {
  const { screen } = useContext(ScreenContext);

  return (
    <div className='relative w-full min-h-screen'>
      <MobileNavbar />
      <Navbar />

      {screen === "home" && <Home />}
      {screen === "experience" && <Experience />}
      {screen === "project" && <Project />}
      {screen === "projects" && <ProjectsGallery />}
      {screen === "about" && <AboutMe />}
      {screen === "contact" && <Contact />}
      {/* <Intro /> */}

      <Toaster position="bottom-right" />
    </div>
  )
}

export default App
