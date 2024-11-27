import React from 'react'
import { aboutItems } from '../content/content'
import Logo from '../assets/images/logo.png'

const About = () => {
    return (
        <section id='about' className='section'>
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hi, I&apos;m Rizki, a web developer passionate about crafting stunning and functional websites. Skilled in React.js, TailwindCSS, and Laravel, I also have experience implementing Agile methodologies to deliver efficient and impactful projects. I combine creativity, technical expertise to deliver impactful solutions. Always eager to learn, I’m ready to bring your vision to life!
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                        {aboutItems.map(({ number, label }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))}
                        <img src={Logo} height={30} width={30} alt="Logo" className='ml-auto md:w-[40px] md:h-[40px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About