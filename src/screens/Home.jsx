import React from 'react'

const Home = () => {
  return (
    <section className='bg-[url(./home-bg.webp)] bg-no-repeat bg-cover bg-center w-full h-full relative overflow-hidden pt-32'>
        <div className='flex flex-col items-center justify-center'>
            <div>
                {"PETER".split("").map((char, i) => (
                    <span key={i} className="text-8xl text-black font-[new-science] uppercase [text-shadow:0_3px_20px_rgba(116,202,193,0.4)] mr-[50px] last:mr-0">
                        {char}
                    </span>
                ))}
            </div>
            <p className='flex flex-col items-center text-3xl font-[queensides]'>
                <span>A missioon-driven Full-Stack Developer creating</span>
                <span>
                    <span className='text-(--third) mr-2'>unique</span>
                    <span>and</span>
                    <span className='text-(--third) inline-block m-2'>impactful</span>
                    <span className='ml-1'>digital experiences</span>
                </span>
            </p>
        </div>
    </section>
  )
}

export default Home