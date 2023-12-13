"use client"

import ProjectCard from "./ProjectCard"
import { register } from "swiper/element/bundle"
register()

export default function Slideshow({ projects }) {
    return (
        <div>
            <swiper-container
                class="h-[600px] w-[800px]"
                a11y="true"
                centered-slides="true"
                effect="cards"
                grab-cursor="true"
                keyboard="true"
                long-swipes-ratio="0.25"
                mousewheel-force-to-axis="true"
                navigation="true"
                pagination="true"
            >
                {projects.map((item) => (
                    <swiper-slide key={`slide-${item.sys.id}`} class="bg-slate-300">
                        <ProjectCard
                            training={item.fields.training}
                            name={item.fields.name}
                            cover={item.fields.cover}
                            coverBlur={item.fields.coverW10Base64Encoded}
                            activity={item.fields.activity}
                            description={item.fields.description}
                            techStack={item.fields.techStack}
                            github={item.fields.github}
                            livePreview={item.fields.livePreview}
                        />
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    )
}