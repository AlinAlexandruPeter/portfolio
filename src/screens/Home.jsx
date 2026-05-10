import React from 'react'
import { cn } from '../lib/utils'
import RotatingText from '../components/RotatingText'

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
                'text-lg mt-4 flex justify-center items-center font-[queensides]',
                'sm:w-2/3',
                'md:hidden',
                'lg:text-lg lg:w-1/2',
                'xl:flex',
                '2xl:text-3xl'
            )}>
                <RotatingText
                    texts={['create', 'enjoy']}
                    mainClassName="px- sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom="last"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    splitBy="words"
                    auto
                    loop
                />
                <RotatingText
                    texts={['enjoying', 'creating']}
                    mainClassName="px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    splitBy="words"
                    auto
                    loop
                />
            </p>
        </div>
    </section>
  )
}

export default Home