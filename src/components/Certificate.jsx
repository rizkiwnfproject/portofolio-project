import React from 'react'
import CertificateCard from './CertificateCard';
import { certificate } from '../content/content';

const Certificate = () => {
    return (
        <section id='certificate' className='section'><div
            className="container"
        >
            <h2 className="headline-2 mb-5 reveal-up">
                My certificate highlights
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {certificate.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <CertificateCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}
            </div>
        </div>
        </section>
    )
}

export default Certificate