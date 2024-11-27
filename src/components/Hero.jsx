import React from 'react';
import Photo from '../assets/images/hero-banner.png'
import Banner from '../assets/images/hero-banner.png';
import { ButtonOutline, ButtonPrimary } from './Button'


const Hero = () => {
    return (
        <section id='home' className='pt-28 lg:pt-36'>

            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src={Photo} width={40} height={40} alt="Rizki Wahyu" className='img-cover' />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'><span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span></span>
                            Available for work
                        </div>
                    </div>
                    <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-3 lg:mb-3 '>
                        Hello! It's Rizki Wahyu N. F 
                    </h2>
                    <h4 className='headline-3 max-w-[20ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-0 mb-8 lg:mb-10'>I'm a website developer</h4>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary label='Download CV' icon="download" classes="" href='https://drive.google.com/file/d/1vqmzaGRTaK05AsuGrxhyTrwDOb-b2Nwi/view?usp=sharing' target='_blank'/>
                        <ButtonOutline href="#about" label='Scroll Down' icon="arrow_downward" classes="" />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                        <img src={Banner} width={656} height={800} alt="" className='w-full' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero