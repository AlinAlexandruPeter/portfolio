import React from 'react'
import { cn } from '../lib/utils'

const Home = () => {
  return (
    <section className={cn(
        'bg-[url(./home-bg.webp)] bg-no-repeat bg-cover bg-center w-full h-screen relative overflow-hidden pt-32',
        'lg:pt-20',
        'xl:pt-24',
        '2xl:pt-32'
    )}>
        <div className='flex flex-col items-center justify-center'>
            <div>
                {"PETER".split("").map((char, i) => (
                    <span 
                        key={i} 
                        className={cn(
                            'text-4xl text-black font-[new-science] uppercase [text-shadow:0_3px_20px_rgba(116,202,193,0.4)] mr-8 last:mr-0',
                            'lg:text-4xl',
                            "2xl:text-8xl 2xl:mr-12"
                        )}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <p className={cn(
                'text-lg mt-4 flex flex-col items-center font-[queensides]',
                'sm:w-2/3',
                'md:hidden',
                'lg:text-lg lg:w-1/2',
                'xl:flex',
                '2xl:text-3xl'
            )}>
                <span className='text-center'>
                    A missioon-driven Full-Stack Developer, creating
                    <span className='text-(--third) mx-2'>unique</span>
                    and
                    <span className='text-(--third) inline-block mx-2'>impactful</span>
                    digital experiences
                </span>
            </p>
        </div>
    </section>
  )
}

export default Home