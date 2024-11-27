import React from 'react'
import { works } from '../content/content'
import ProjectCard from './ProjectCard'
import { ButtonPrimary } from './Button'

const Work = () => {
    return (
        <section id='work' className='section'><div
            className="container"
        >
            <div className="flex flex-col md:flex-row md:justify-between">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="mb-8">
                <ButtonPrimary label='See More' icon="arrow_outward" classes="" href='https://drive.google.com/file/d/1fbxccpwNwlk6NmkHMnUH6I3u8JUXJ8mu/view?usp=sharing' target='_blank'/>
                </div>
            </div>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
                ))}
            </div>
        </div>
        </section>
    )
}

export default Work