import React, { useState } from 'react'
import { cn } from '../lib/utils';

const AboutMe = () => {
  const texts = [
    "A curious teenager at the age of 16 started his coding journey, his first client being a neighbour’s website.",
    "Graduated from the Theoretical ‘Mircea Eliade’ High School and currently studying Software Engineering at the University of Petrošani.",
    "That kid was someone who got to work with clients from all arround the world: Romania, USA, Japan, Belgium, Italy.",
    "He is now a Full-Stack Developer with a passion for delivering the best products."
  ]
  const [currentText, setCurrentText] = useState(texts[0]);

  return (
    <section className='flex flex-col items-end text-secondary text-[180px] font-bold font-[krona] justify-center bg-[url(./about-me-bg.png)] bg-no-repeat bg-cover bg-center w-full h-full relative overflow-hidden px-12'>
        <h1 className='uppercase'>About</h1>
        <div className='flex items-center justify-end gap-6 w-4/10 bg-(--third) px-12'>
            <hr className='w-2/3 border-16'/>
            <h1 className='uppercase'>Me</h1>
        </div>
        <p className='text-4xl font-[inter] w-2/3 text-right mt-12'>
            {currentText}
        </p>

        <div className='flex items-center justify-around w-1/3 gap-4'>
          {texts.map((_, index) => (
            <hr
              key={index}
              className={cn('flex-1/4 border-2 mt-12 rounded-full transition-all duration-200', index === texts.indexOf(currentText) ? "opacity-100 border-(--third) -translate-y-2" : "opacity-40 cursor-pointer")}
              onClick={() => setCurrentText(texts[index])}
            />
          ))}
        </div>
    </section>
  )
}

export default AboutMe