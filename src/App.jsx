import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './screens/AboutMe'
import Contact from './screens/Contact'
import Experience from './screens/Experience'
import Home from './screens/Home'
import Intro from './screens/Intro'
import Project from './screens/Project'
import ProjectsGallery from './screens/ProjectsGallery'

function App() {
  const [currentScreen, setCurrentScreen] = useState("home")

  return (
    <div className='realtive w-screen h-screen overflow-hidden'>
      <Navbar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      {currentScreen === "home" && <Home />}
      {currentScreen === "experience" && <Experience />}
      {currentScreen === "project" && <Project setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "projects" && <ProjectsGallery setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "about" && <AboutMe />}
      {currentScreen === "contact" && <Contact />}
      {/* <Intro /> */}

      <Toaster position="bottom-right" />
    </div>
  )
}

export default App
