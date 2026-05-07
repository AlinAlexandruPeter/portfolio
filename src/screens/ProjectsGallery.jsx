import { useEffect, useState } from 'react'
import projects from '../lib/projects.jsx'
import { cn } from '../lib/utils'
import ProjectsIndicator from '../components/ProjectsIndicator'
import LogoLoop from '../components/ui/LogoLoop.jsx'


const ProjectsGallery = () => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));
    const [showContent, setShowContent] = useState(true);

    return (
      <section className='bg-secondary w-full h-full relative overflow-hidden pt-32'>
        <ProjectsCarousel 
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            showContent={showContent}
            setShowContent={setShowContent}
        />
        
        <section className={cn(
            'bg-transparent relative overflow-hidden h-full transition-all duration-300 ease',
            !showContent && "opacity-0"
        )}>
            <div className='flex flex-col items-end justify-end pb-12 text-(--third) w-full h-full px-16'>
                <h1 className='text-9xl font-black'>{projects[activeIndex].name}</h1>
                <LogoLoop
                    logos={projects[activeIndex].technologies}
                    speed={100}
                    direction="left"
                    logoHeight={100}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#FAFDF3"
                    ariaLabel="Technologies"
                    className="text-gray-400 w-2/5! mt-6 mb-12"
                />
                <p className='w-1/2 text-4xl font-[inter] text-right'>{projects[activeIndex].description}</p>
                <div className='z-20 text-4xl flex items-center gap-6'>
                    <a
                        href='https://github.com'
                        className='bg-(--third) text-white px-2 mt-6 rounded-sm hover:scale-105 transition-transform duration-300'>
                        Website
                    </a>
                    <a
                        href='https://github.com'
                        className='bg-(--third) text-white px-2 mt-6 rounded-sm hover:scale-105 transition-transform duration-300'>
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    </section>
  )
}

const ProjectsCarousel = ({ 
    showContent, 
    setShowContent,
    activeIndex,
    setActiveIndex
}) => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleProjectChange = (targetIndex) => {
        setShowContent(false);

        const direction = targetIndex > activeIndex ? 1 : -1;

        let current = activeIndex;
        const interval = setInterval(() => {
            current += direction;
            setActiveIndex(current);

            if (current === targetIndex) {
                setShowContent(true);
                clearInterval(interval);
            }
        }, 100);
    }

    useEffect(() => {
        console.log(hoveredElement)
    }, [hoveredElement])

    return (
        <div className='absolute flex items-center justify-start w-4/5 h-1/2'>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={cn('absolute top-1/3 left-1/3 w-1/2 aspect-3/2 border-6 border-(--third) bg-secondary rounded-[50%] flex items-center justify-center cursor-pointer transition-all duration-100', activeIndex !== index && 'hover:border-[#00FFE5] z-100')}
                    style={{
                        transform:
                        activeIndex === index ?
                        `translate(-${7.25}%, ${7.25}%) translateX(-50%) rotate(-45deg)`
                        :
                        (index > activeIndex ?
                            `translate(-${
                            (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%,${
                            (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%) translateX(-50%) scale(calc(1 - ${Math.abs(activeIndex - index) * 0.025})) rotate(-45deg)`
                        :
                        `translate(${
                            (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%, -${
                            (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%) translateX(-50%) scale(calc(1 - ${(activeIndex - index) * 0.025})) rotate(-45deg)`
                        ),
                        zIndex: activeIndex === index ? 20 : (activeIndex > index ? index : projects.length - index),
                        opacity: activeIndex === index ? "100%" : (activeIndex > index ? `calc(90% - ${activeIndex - index}0%)` : `calc(90% - ${index - activeIndex}0%)`),
                    }}
                    onClick={() => handleProjectChange(index)}
                    onMouseEnter={() => setHoveredElement(project)}
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <div className='flex flex-col gap-4 items-center justify-center transition-opacity duration-150' style={{ transform: "rotate(45deg)", opacity: showContent ? "100%" : "0%"}}>
                        <img
                            src={project.images[0]}
                            className='w-60'
                            alt={project.name}
                        />
                        <span className={cn('text-5xl text-(--third) font-extrabold', activeIndex !== index && 'text-transparent')}>{project.name}</span>
                    </div>
                </div>
            ))}
            {
                (hoveredElement !== null && activeIndex !== projects.indexOf(hoveredElement)) && 
                <ProjectsIndicator
                    img={hoveredElement.images[1]}
                    activeIndex={activeIndex}
                    index={projects.indexOf(hoveredElement)}
                />
            }
        </div>
    )
}

export default ProjectsGallery