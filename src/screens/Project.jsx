import React, { useContext } from 'react'
import david from '../assets/images/david-project.png'
import LogoLoop from '../components/ui/LogoLoop'
import { FaArrowLeftLong } from "react-icons/fa6";
import { ScreenContext } from '../context/screen-context';

const Project = ({ currentProject }) => {
    const { toggleScreen } = useContext(ScreenContext);

    return (
        <section className='bg-secondary w-full h-full relative overflow-hidden pt-32'>
            <div className='flex flex-col items-end justify-center text-(--third) w-full h-full px-16'>
                <button
                    onClick={() => toggleScreen("projects")}
                    className='flex items-center text-2xl text-primary gap-2 uppercase cursor-pointer font-bold mb-16 hover:gap-4 transition-all duration-300'
                >
                    <FaArrowLeftLong size={28} />
                    <span>Back to Projects</span>
                </button>
                <h1 className='text-9xl font-black'>{currentProject.name}</h1>
                <LogoLoop
                    logos={currentProject.technologies}
                    speed={100}
                    direction="left"
                    logoHeight={100}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#FAFDF3"
                    ariaLabel="Technologies"
                    className="text-gray-400 w-1/2! mt-6 mb-12"
                />
                <p className='w-1/2 text-4xl font-[inter] text-right'>{currentProject.description}</p>
                <div className='z-20 text-4xl flex items-center gap-6'>
                    <a
                        href={currentProject.github}
                        className='bg-(--third) text-white px-2 mt-6 rounded-sm hover:scale-105 transition-transform duration-300'>
                        Website
                    </a>
                    <a
                        href={currentProject.live || currentProject.github}
                        className='bg-(--third) text-white px-2 mt-6 rounded-sm hover:scale-105 transition-transform duration-300'>
                        GitHub
                    </a>
                </div>
            </div>

            <img
                src={david}
                className="absolute bottom-0 left-0 object-contain"
                alt="Project"
            />
            <img
                src={currentProject.images[0]}
                className=" w-1/4 absolute -bottom-10 -right-20 object-contain opacity-30 pointer-events-none"
                alt="NovaA AI"
            />
        </section>
    )
}

export default Project