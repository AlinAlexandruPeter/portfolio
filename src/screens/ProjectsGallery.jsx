import { useEffect, useRef, useState } from 'react'
import projects from '../lib/projects.jsx'
import { cn } from '../lib/utils'
import creationOfAdam from '../assets/images/creation-of-adam.png'
import gradient from '../assets/images/gradient.png'
import swipe from '../assets/images/swipe.png'
import ProjectsIndicator from '../components/ProjectsIndicator'
import LogoLoop from '../components/ui/LogoLoop.jsx'

const ProjectsGallery = () => {
    const initialWinWidth = window.innerWidth

    const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));
    const [showContent, setShowContent] = useState(true);
    const [logoHeight, setLogoHeight] = useState(() => {
        if (initialWinWidth < 1280) {
            return 40
        } else if (initialWinWidth < 1535) {
            return 70
        } else {
            return 100
        }
    })
    // const { toggleScreen } = useContext(ScreenContext);

    useEffect(() => {
        const handleResize = () => {
            const winWidth = window.innerWidth

            if (winWidth < 1280) {
                setLogoHeight(40)
            } else if (winWidth < 1535) {
                setLogoHeight(70)
            } else {
                setLogoHeight(100)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
      <section className='bg-secondary w-full h-screen relative overflow-hidden pt-32'>
        <img
            src={creationOfAdam}
            alt='Creation of Adam'
            className={cn(
                'w-full bottom-3/5 -mb-12 pointer-events-none',
                'lg:hidden'
            )}
        />

        <img
            src={swipe}
            alt='Creation of Adam'
            className={cn(
                'absolute bottom-4 right-4 w-35',
                'lg:hidden'
            )}
        />

        <img
            src={gradient}
            alt=''
            className={cn(
                'hidden absolute top-4 right-0',
                'xl:block xl:w-100',
                '2xl:w-160'
            )}
        />
        
        <ProjectsCarousel 
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            showContent={showContent}
            setShowContent={setShowContent}
        />
        
        <section className={cn(
            'hidden bg-transparent relative overflow-hidden h-full transition-all duration-300 ease',
            !showContent && "opacity-0",
            'lg:block'
        )}>
            <div className='flex flex-col items-end justify-end pb-12 text-(--third) w-full h-full px-16'>
                <h1 className={cn(
                    'font-black',
                    'lg:text-6xl',
                    'xl:text-8xl',
                    '2xl:text-9xl'
                )}>{projects[activeIndex].name}</h1>
                <LogoLoop
                    logos={projects[activeIndex].technologies}
                    speed={100}
                    direction="left"
                    logoHeight={logoHeight}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#FAFDF3"
                    ariaLabel="Technologies"
                    className="text-gray-400 w-2/5! mt-6 mb-12"
                />
                <p className={cn(
                    'w-1/2 text-xl font-[inter] text-right',
                    'xl:text-2xl',
                    '2xl:text-4xl'
                )}>{projects[activeIndex].description}</p>
                <div className={cn(
                    'z-20 text-2xl flex items-center gap-6',
                    '2xl:text-4xl'
                )}>
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
    setActiveIndex,
}) => {
    const [hoveredElement, setHoveredElement] = useState(null);
    const touchState = useRef({ startX: 0, startY: 0, startTime: 0 });

    const handlePointerDown = (e) => {
        touchState.current = {
            startX: e.clientX,
            startY: e.clientY,
            startTime: Date.now(),
        };
    };

    const handlePointerUp = (e) => {
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            return
        } 

        const { startX, startY, startTime } = touchState.current;
        
        // capture the ending position and time
        const endX = e.clientX;
        const endY = e.clientY;
        const endTime = Date.now();

        // calculate the distance moved and the time elapsed
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const totalDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const duration = endTime - startTime;

        // define thresholds
        const MAX_CLICK_DISTANCE = 10;
        const MAX_CLICK_DURATION = 300;

        if (totalDistance < MAX_CLICK_DISTANCE && duration < MAX_CLICK_DURATION) {
            return
        } else if (Math.abs(distanceX) > 40) {
            if (distanceX > 0) {
                const direction = 1;

                setActiveIndex(activeIndex + direction);
            } else {
                const direction = -1;

                setActiveIndex(activeIndex + direction);
            }
        }
    };

    const handleProjectChange = (targetIndex) => {
        if (activeIndex === targetIndex) {
            return
        }

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

    return (
        <div 
            className={cn(
            'absolute flex touch-none items-center justify-start w-full h-90 z-10',
            'lg:w-4/5 lg:h-1/2'
            )}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
        >
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={cn(
                        'absolute top-2/5 left-1/2 w-4/5 aspect-3/2 border-4 border-(--third) bg-secondary rounded-[50%] flex items-center justify-center cursor-pointer transition-all duration-100', 
                        activeIndex !== index && 'hover:border-[#00FFE5] z-100',
                        activeIndex === index && 'cursor-auto',
                        'lg:top-1/3 lg:left-1/3 lg:w-1/2',
                        '2xl:border-6'
                    )}
                    style={{
                        transform: activeIndex === index 
                            ? `translate(-${7.25}%, ${7.25}%) translateX(-50%) rotate(-45deg)`
                            : (
                                index > activeIndex 
                                    ? `translate(-${
                                        (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%,${
                                        (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%) translateX(-50%) scale(calc(1 - ${Math.abs(activeIndex - index) * 0.025})) rotate(-45deg)`
                                    : `translate(${
                                        (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%, -${
                                        (activeIndex > index ? (activeIndex - index - 1) : index - activeIndex + 1) * 7.25}%) translateX(-50%) scale(calc(1 - ${(activeIndex - index) * 0.025})) rotate(-45deg)`
                            ),
                        zIndex: activeIndex === index 
                            ? 20 
                            : (activeIndex > index 
                                ? index 
                                : projects.length - index
                            ),
                        opacity: activeIndex === index 
                            ? "100%" 
                            : (activeIndex > index 
                                ? `calc(90% - ${activeIndex - index}0%)` 
                                : `calc(90% - ${index - activeIndex}0%)`
                            ),
                    }}
                    onClick={() => handleProjectChange(index)}
                    onMouseEnter={() => setHoveredElement(project)}
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <div 
                        className='flex flex-col rotate-45 gap-4 items-center justify-center transition-opacity duration-150' 
                        style={{ 
                            
                            opacity: showContent ? "100%" : "0%"
                        }}>
                        <img
                            src={project.images[0]}
                            className={cn(
                                'w-25',
                                'lg:w-40',
                                '2xl:w-60'
                            )}
                            alt={project.name}
                        />
                        <span 
                            className={cn(
                                'text-xl text-(--third) font-extrabold', 
                                activeIndex !== index && 'text-transparent',
                                'lg:text-2xl',
                                '2xl:text-5xl'
                            )
                        }>{project.name}</span>
                    </div>
                </div>
            ))}
            {(hoveredElement !== null && activeIndex !== projects.indexOf(hoveredElement)) && (
                <ProjectsIndicator
                    img={hoveredElement.images[1]}
                    activeIndex={activeIndex}
                    index={projects.indexOf(hoveredElement)}
                />
            )}
        </div>
    )
}

export default ProjectsGallery