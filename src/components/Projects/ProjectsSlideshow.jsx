"use client"

import ProjectCard from "./ProjectCard"
import "./ProjectsSlideshow.css"
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects }) {
    return (
        <swiper-container
            class="projects-swiper w-full"
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
                <swiper-slide key={`slide-${item.id}`} lazy="true" class="flex justify-center items-center drop-shadow-lg">
                    <ProjectCard
                        training={item.training}
                        name={item.name}
                        coverUrl={item.coverUrl}
                        coverBlur={item.coverBlur}
                        activity={item.activity}
                        description={item.description}
                        techStack={item.techStack}
                        github={item.github}
                        figma={item.figma}
                        livePreview={item.livePreview}
                    />
                </swiper-slide>
            ))}
        </swiper-container>
    )
}
