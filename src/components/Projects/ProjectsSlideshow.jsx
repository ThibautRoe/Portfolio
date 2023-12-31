"use client"

import ProjectCard from "./ProjectCard"
// import "./ProjectsSlideshow.css" //TODO à remettre
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects }) {
    return (
        <swiper-container
            class="w-full lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%]"
            a11y="true"
            cards-effect-slide-shadows="false" // Désactivé car l'ombre se mettait même au niveau des bords arrondis
            effect="cards"
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
        >
            {projects.map((item) => (
                <swiper-slide key={`slide-${item.sys.id}`} lazy="true" class="flex items-center drop-shadow-lg">
                    <ProjectCard
                        training={item.fields.training}
                        name={item.fields.name}
                        cover={item.fields.cover}
                        coverBlur={item.fields.coverBlur}
                        activity={item.fields.activity}
                        description={item.fields.description}
                        techStack={item.fields.techStack}
                        github={item.fields.github}
                        livePreview={item.fields.livePreview}
                    />
                </swiper-slide>
            ))}
        </swiper-container>
    )
}
