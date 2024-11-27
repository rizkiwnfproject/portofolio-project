import React from 'react'
import { sitemap, socials } from '../content/content'
import { ButtonPrimary } from './Button'
import Logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2  ">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary href="mailto:rizkiwahyunf2@gmail.com" label='Start Project' icon="chevron_right" classes="reveal-up" />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
            <div className="">
              <p className='mb-2 reveal-up'>Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className='mb-2 reveal-up'>Socials Media</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
        <div className="flex items-center justify-between pt-10 mb-8 ">
          <a href="/" className='logo reveal-up'>
            <img src={Logo} width={40} height={40} alt="Logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">RizkiWNF</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer