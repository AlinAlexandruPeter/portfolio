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
            'hidden items-center justify-between absolute top-0 left-0 right-0 px-10 py-6 z-20',
            'lg:flex',
            '2xl:px-28 2xl:py-12'
        )}>
            <img
                src={logoGrayPages.includes(screen) ? logoGray : logoWhite}
                alt="Peter Alin-Alexandru"  
                className={cn(
                    'w-20',
                    'xl:w-30',
                    '2xl:w-auto'
                )}
            />
            <div className={cn(
                'flex gap-6',
                'xl:gap-9',
                '2xl:gap-12'
            )}>
                {buttons.map((button) => (
                    <button
                        key={button.key}
                        className={cn(
                            'font-[plateia] cursor-pointer text-base uppercase transition-all duration-300',
                            logoGrayPages.includes(screen) ? "text-primary" : "text-secondary",
                            button.key === screen && "line-through decoration-[#00FFE5] decoration-3 pointer-events-none",
                            (button.key === "experience" && screen === "experience") 
                                && "lg:ml-24 xl:ml-48 2xl:ml-70",
                            'xl:text-lg',
                            '2xl:text-2xl'
                        )}
                        onClick={() => toggleScreen(button.key)}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Navbar