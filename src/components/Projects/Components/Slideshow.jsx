"use client"

import ProjectCard from "./ProjectCard"
import { register } from "swiper/element/bundle"
register()

export default function Slideshow({ projects }) {
    return (
        <swiper-container
            class="w-1/2"
            // enabled="false"
            a11y="true"
            // centered-slides="true"
            cards-effect-slide-shadows="false" // Désactivé car l'ombre se mettait même au niveau des bords arrondis
            effect="cards"
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            // slides-per-view="3"
        >
            {projects.map((item) => (
                <swiper-slide key={`slide-${item.sys.id}`} lazy="true" class="drop-shadow-lg">
                    {" "}
                    {/* TODO drop-shadow-md sur mobile */}
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
