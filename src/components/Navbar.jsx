import React, { useContext } from 'react'
import logoGray from '../assets/images/logo-gray.png'
import logoWhite from '../assets/images/logo-white.png'
import { cn } from '../lib/utils'
import { ScreenContext } from '../context/screen-context'

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

const Navbar = () => {
    const logoGrayPages = ["home", "project", "projects"]
    const { screen, toggleScreen } = useContext(ScreenContext);

    return (
        <div className={cn(
            'hidden items-center justify-between absolute top-0 left-0 right-0 px-28 py-12 z-10',
            'lg:flex',
            ''
        )}>
            <img
                src={logoGrayPages.includes(screen) ? logoGray : logoWhite}
                alt="Peter Alin-Alexandru"  
            />
            <div className='flex gap-12'>
                {buttons.map((button) => (
                    <button
                        key={button.key}
                        className={cn(
                            'font-[plateia] cursor-pointer text-2xl uppercase transition-all duration-300',
                            logoGrayPages.includes(screen) ? "text-primary" : "text-secondary",
                            button.key === screen && "line-through decoration-[#00FFE5] decoration-3 pointer-events-none",
                            (button.key === "experience" && screen === "experience") && "ml-70"
                        )}
                        onClick={() => toggleScreen(button.key)}
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