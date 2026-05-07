import React, { useEffect, useState } from 'react'
import hand from '../assets/images/hand.png'
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

const Experience = () => {
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
  return (
        <section className='bg-[url(./experience-bg.png)] flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center w-full h-full overflow-hidden pt-32'>
            <div className='w-3/4 mb-36'>
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
                    className='select-none'
                />
            </div>
            <div className='flex items-baseline-last w-full justify-center px-40 mask-[linear-gradient(to_right,transparent_5%,black_30%,var(--third)_100%)] mask-size-[100%_100%] mask-no-repeat'>
                <Carousel opts={{ loop: true }} setApi={setEmptyApi} className="pointer-events-none">
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
                <Carousel opts={{ loop: true, draggable: false }} setApi={setFilledApi} className="pointer-events-none">
                    <CarouselContent className="text-secondary">
                        {jobs.map((job, index) => (
                            <CarouselItem key={index} className="flex flex-col gap-1 items-end justify-center">
                                <div className='flex flex-col items-center w-1/2 gap-1'>
                                    <h1 className={cn('uppercase text-(--third) font-[plateia] text-xl transition-all duration-300', selectedIndex === index ? 'opacity-100' : 'opacity-0')}>{job.position}</h1>
                                    <div className={cn('flex items-center font-[plateia] gap-8 mb-3 text-(--third) transition-all duration-300', selectedIndex === index ? 'opacity-100' : 'opacity-0')}>
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
            <div class="w-full h-4 bg-linear-to-r from-transparent via-(--third) to-transparent mt-6" />
            <div className='flex items-center justify-end gap-2 w-full px-40'>
                <button
                    className='opacity-30 hover:opacity-100 transition-all duration-200'
                    onClick={() => {
                        emptyApi?.scrollPrev()
                        filledApi?.scrollPrev()
                    }}
                >
                    <img
                        src={arrow}
                        className='rotate-180 mt-12 cursor-pointer'
                        alt=""
                    />
                </button>
                <button
                    className='opacity-30 hover:opacity-100 transition-all duration-200'
                    onClick={() => {
                        emptyApi?.scrollNext()
                        filledApi?.scrollNext()
                    }}
                >
                    <img
                        src={arrow}
                        className='mt-12 cursor-pointer opcity-30'
                        alt=""
                    />
                </button>
            </div>

            <img
                src={hand}
                className='absolute top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none z-30'
                alt=''
            />
        </section>
  )
}

const ExperienceDot = ({ isFilled = false }) => {
    return (
        <div className={cn('border-10 border-(--third) rounded-full w-16 h-16', isFilled ? 'bg-(--third)' : 'bg-transparent')}></div>
    )
}

export default Experience