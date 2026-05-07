import React from 'react'
import logoGray from '../assets/images/logo-gray.png'
import logoWhite from '../assets/images/logo-white.png'
import { cn } from '../lib/utils'

const buttons = [
    {
        text: "Home",
        key: "home",
    },
    {
        text: "About Me",
        key: "about",
    },
    {
        text: "Experience",
        key: "experience",
    },
    {
        text: "Projects",
        key: "projects",
    },
    {
        text: "Contact",
        key: "contact",
    },
]

const Navbar = ({ currentScreen, setCurrentScreen}) => {
    const logoGrayPages = ["home", "project", "projects"]
  return (
    <div className='flex items-center justify-between absolute top-0 left-0 right-0 px-28 py-12 z-10'>
        <img
            src={logoGrayPages.includes(currentScreen) ? logoGray : logoWhite}
            alt="Peter Alin-Alexandru"  
        />
        <div className='flex gap-12'>
            {buttons.map((button) => (
                <button
                    key={button.key}
                    className={cn(
                        'font-[plateia] cursor-pointer text-2xl uppercase transition-all duration-300',
                        logoGrayPages.includes(currentScreen) ? "text-primary" : "text-secondary",
                        button.key === currentScreen && "line-through decoration-[#00FFE5] decoration-3 pointer-events-none",
                        (button.key === "experience" && currentScreen === "experience") && "ml-70"
                    )}
                    onClick={() => setCurrentScreen(button.key)}
                >
                    {button.text}
                </button>
            ))}
        </div>
        {/* <div className='flex gap-12'>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={cn('text-secondary font-[plateia] cursor-pointer text-2xl uppercase transition-all duration-300', index === 2 && "ml-90")}
                >
                    {button}
                </button>
            ))}
        </div> */}

    </div>
  )
}

export default Navbar