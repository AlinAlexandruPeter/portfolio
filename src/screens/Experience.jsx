import React, { useEffect, useState } from 'react'
import hand from '../assets/images/hand.png'
import laPenseur from '../assets/images/la-penseur.png'
import TextPressure from '../components/ui/TextPressure'
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '../lib/utils'
import jobs from '../lib/jobs'
import arrow from '../assets/images/experience-carousel-arrow.svg'
import { ArrowDown, ArrowUp } from 'lucide-react'

const Experience = () => {
    const [moblieEmptyApi, setMobileEmptyApi] = useState(null)
    const [mobileFilledApi, setMobileFilledApi] = useState(null)
    const [emptyApi, setEmptyApi] = useState(null)
    const [filledApi, setFilledApi] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!filledApi) return

        setSelectedIndex(filledApi.selectedScrollSnap())

        const onSelect = () => setSelectedIndex(filledApi.selectedScrollSnap())
        filledApi.on("select", onSelect)

        return () => filledApi.off("select", onSelect)
    }, [filledApi])

    const scrollToPrev = () => {
        emptyApi?.scrollPrev()
        filledApi?.scrollPrev()

        moblieEmptyApi?.scrollPrev()
        mobileFilledApi?.scrollPrev()
    }

    const scrollToNext = () => {
        emptyApi?.scrollNext()
        filledApi?.scrollNext()

        moblieEmptyApi?.scrollNext()
        mobileFilledApi?.scrollNext()
    }
  return (
        <section className={cn(
            'bg-[url(./experience-bg.png)] relative flex flex-row-reverse items-center justify-start bg-no-repeat bg-cover bg-center w-full h-screen overflow-hidden pt-32',
            'lg:flex-col'
        )}>
            <div className={cn(
                'hidden w-3/4 mb-36',
                'lg:block'
            )}>
                <TextPressure
                    text="My Steps"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#fafdf3"
                    strokeColor="#ff0000"
                    minFontSize={32}
                    className={cn(
                        'hidden select-none',
                        'lg:block'
                    )}
                />
            </div>

            {/* mobile */}
            <div className={cn(
                'flex relative items-center w-full h-full gap-4',
                'lg:hidden'
            )}>
                <div className='flex gap-4 absolute top-0 right-8 text-white'>
                    <span 
                        className='px-2 py-1 bg-(--third)/70 rounded'
                        onClick={scrollToPrev}
                    >
                        <ArrowUp />
                    </span>
                    <span 
                        className='px-2 py-1 bg-(--third)/70 rounded'
                        onClick={scrollToNext}
                    >
                        <ArrowDown />
                    </span>
                </div>
                
                <div className="w-2 ml-4 h-full bg-linear-to-b from-transparent via-(--third) to-transparent lg:hidden" />
                <div className={cn(
                    'flex flex-col-reverse h-full items-baseline-last w-4/5 justify-around',
                    'lg:hidden'
                )}>
                    <Carousel 
                        opts={{ loop: true, align: 'start' }} 
                        setApi={setMobileEmptyApi} 
                        className="pointer-events-none w-full"
                        orientation="vertical"
                    >
                        <CarouselContent className="text-white h-[150px]">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <CarouselItem key={index} className="flex flex-col items-start w-full justify-center basis-1/2">
                                    <ExperienceDot />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="opacity-0 pointer-events-none hidden" />
                        <CarouselNext className="opacity-0 pointer-events-none hidden" />
                    </Carousel>
                    <Carousel 
                        opts={{ loop: true, draggable: false }} 
                        setApi={setMobileFilledApi} 
                        className="pointer-events-none w-full"
                        orientation="vertical"
                    >
                        <CarouselContent className="text-secondary h-[120px]">
                            {jobs.map((job, index) => (
                                <CarouselItem key={index} className={cn(
                                    'flex flex-col gap-1 items-center justify-center basis-full h-full',
                                    "lg:flex-col"
                                )}>
                                    <div className={cn(
                                        'flex flex-row-reverse items-center justify-end w-full gap-1',
                                        'lg:flex-col lg:w-1/2',
                                    )}>
                                        <div className='flex flex-col items-center'>
                                            <h1 className={cn(
                                                'uppercase text-(--third) font-[plateia] text-sm transition-all duration-300', 
                                                selectedIndex === index ? 'opacity-100' : 'opacity-0',
                                                'lg:text-xl'
                                            )}>{job.mobilePosition}</h1>
                                            <div className={cn(
                                                'flex items-center font-[plateia] opacity-40 gap-2 mb-3 text-sm text-(--third) transition-all duration-300', 
                                                selectedIndex === index ? 'opacity-100' : 'opacity-0',
                                                'lg:text-xl lg:gap-8'
                                            )}>
                                                <span className=''>{job.company}</span>
                                            </div>
                                            <h3 className={cn(
                                                'mb-4 w-full text-center transition-all duration-300 text-xs', 
                                                selectedIndex === index ? 'opacity-100' : 'opacity-0',
                                                'lg:w-2/3'
                                            )}>{job.description}</h3>
                                        </div>
                                        <ExperienceDot isFilled />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="opacity-0 pointer-events-none hidden" />
                        <CarouselNext className="opacity-0 pointer-events-none hidden" />
                    </Carousel>
                </div>
            </div>

            <img 
                src={laPenseur}
                alt='La Penseur'
                className={cn(
                    'absolute bottom-0 right-0 w-65',
                    'lg:hidden'
                )}
            />

            <div className={cn(
                'hidden items-center justify-end gap-2 w-full px-40 mb-12',
                'lg:flex'
            )}>
                <button
                    className='opacity-30 hover:opacity-100 transition-all duration-200'
                    onClick={scrollToPrev}
                >
                    <img
                        src={arrow}
                        className='rotate-180 mt-12 cursor-pointer'
                        alt=""
                    />
                </button>
                <button
                    className='opacity-30 hover:opacity-100 transition-all duration-200'
                    onClick={scrollToNext}
                >
                    <img
                        src={arrow}
                        className='mt-12 cursor-pointer opcity-30'
                        alt=""
                    />
                </button>
            </div>

            {/* desktop */}
            <div className={cn(
                'hidden items-baseline-last w-full justify-center px-40 mask-[linear-gradient(to_right,transparent_5%,black_30%,var(--third)_100%)] mask-size-[100%_100%] mask-no-repeat',
                'lg:flex'
            )}>
                <Carousel 
                    opts={{ loop: true }} 
                    setApi={setEmptyApi} 
                    className="pointer-events-none"
                >
                    <CarouselContent className="text-white">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <CarouselItem key={index} className="flex items-center justify-center basis-1/3">
                                <ExperienceDot />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="opacity-0 pointer-events-none" />
                    <CarouselNext className="opacity-0 pointer-events-none" />
                </Carousel>
                <Carousel 
                    opts={{ loop: true, draggable: false }} 
                    setApi={setFilledApi} 
                    className="pointer-events-none"
                >
                    <CarouselContent className="text-secondary">
                        {jobs.map((job, index) => (
                            <CarouselItem key={index} className="flex flex-col gap-1 items-end justify-end">
                                <div className='flex flex-col items-center w-1/2 gap-1'>
                                    <h1 className={cn(
                                        'uppercase text-center text-(--third) font-[plateia] text-xl transition-all duration-300', 
                                        selectedIndex === index ? 'opacity-100' : 'opacity-0'
                                    )}>{job.position}</h1>
                                    <div className={cn(
                                        'flex items-center font-[plateia] gap-8 mb-3 text-(--third) transition-all duration-300', 
                                        selectedIndex === index ? 'opacity-100' : 'opacity-0'
                                    )}>
                                        <span className=''>{job.company}</span>
                                        <Separator orientation="vertical" className="bg-(--third) w-1" />
                                        <span>{job.year}</span>
                                    </div>
                                    <h3 className={cn('mb-4 w-2/3 text-center transition-all duration-300', selectedIndex === index ? 'opacity-100' : 'opacity-0')}>{job.description}</h3>
                                    <ExperienceDot isFilled />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="opacity-0 pointer-events-none" />
                    <CarouselNext className="opacity-0 pointer-events-none" />
                </Carousel>
            </div>

            <div className="hidden w-full h-4 bg-linear-to-r from-transparent via-(--third) to-transparent mt-6 lg:block" />

            <img
                src={hand}
                className={cn(
                    'hidden absolute top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none z-30',
                    'lg:block'
                )}
                alt=''
            />
        </section>
  )
}

const ExperienceDot = ({ isFilled = false }) => {
    return (
        <div className={cn(
            'border-4 border-(--third) rounded-full w-6 h-6 aspect-square!', 
            isFilled ? 'bg-(--third)' : 'bg-transparent',
            'lg:w-16 lg:h-16 lg:border-10'
        )} />
    )
}

export default Experience