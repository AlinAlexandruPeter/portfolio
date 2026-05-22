import React, { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { cn } from '../lib/utils';

const AboutMe = () => {
  const texts = [
    "A curious teenager at the age of 16 started his coding journey, his first client being a neighbour.",
    "Graduated from the Theoretical ‘Mircea Eliade’ High School and currently studying Automatics and Informatics at the University of Petroșani.",
    "That kid was someone who would go to work with clients from all arround the world: Romania, USA, Japan, Belgium, Italy.",
    "He is now a Full-Stack Developer with a passion for delivering the best products."
  ]
  const [currentText, setCurrentText] = useState(texts[0]);

  return (
    <section className={cn(
      'flex flex-col items-end text-secondary text-[65px] py-32 font-bold font-[krona] justify-center bg-[url(/about-me-bg.png)] bg-no-repeat bg-cover bg-center w-full h-screen relative overflow-hidden px-4',
      'sm:text-[100px]',
      'lg:text-[60px] lg:px-12',
      'xl:text-[90px]',
      '2xl:text-[120px] 2xl:px-12',
    )}>
        <h1 className='uppercase'>About</h1>
        <div className={cn(
          'flex items-center justify-end gap-6 w-2/3 bg-(--third) px-2',
          'lg:px-4 lg:w-1/4',
          'xl:w-1/3',
          '2xl:px-12 2xl:w-2/5'
        )}>
            <Separator className={cn(
              'w-16 border-6',
              'lg:w-1/3 lg:border-8',
              '2xl:w-2/5 2xl:border-16',
            )} />
            <h1 className='uppercase'>Me</h1>
        </div>
        <p className={cn(
          'text-xl font-[inter] h-40 w-4/5 text-right mt-12',
          'sm:text-2xl',
          'lg:text-xl lg:w-1/2 lg:h-16',
          'xl:text-2xl xl:h-auto',
          '2xl:text-3xl',
        )}>
            {currentText}
        </p>

        <div className={cn(
          'absolute left-8 bottom-1/2 -translate-y-1/2 origin-bottom-left rotate-90 flex items-center justify-around w-2/3 gap-4',
          'lg:static lg:w-1/3 lg:rotate-0 lg:translate-y-0'
        )}>
          {texts.map((_, i) => (
            <Separator
              key={i}
              className={cn(
                'flex-1/4 border-2 mt-12 rounded-full transition-all duration-200', 
                i === texts.indexOf(currentText) 
                  ? "opacity-100 border-(--third) -translate-y-2" 
                  : "opacity-40 cursor-pointer"
              )}
              onClick={() => setCurrentText(texts[i])}
            />
          ))}
        </div>
    </section>
  )
}

export default AboutMe