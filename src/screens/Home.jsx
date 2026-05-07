import React from 'react'
import { cn } from '../lib/utils'

const Home = () => {
  return (
    <section className='bg-[url(./home-bg.webp)] bg-no-repeat bg-cover bg-center w-full h-screen relative overflow-hidden pt-32'>
        <div className='flex flex-col items-center justify-center'>
            <div>
                {"PETER".split("").map((char, i) => (
                    <span 
                        key={i} 
                        className={cn(
                            'text-4xl text-black font-[new-science] uppercase [text-shadow:0_3px_20px_rgba(116,202,193,0.4)] mr-8 last:mr-0',
                            "lg:text-8xl lg:mr-12"
                        )}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <p className={cn(
                'text-lg mt-4 flex flex-col items-center font-[queensides]',
                'lg:text-3xl lg:flex',
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