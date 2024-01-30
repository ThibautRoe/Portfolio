"use client"

import { useEffect } from "react"
import ProjectCard from "./ProjectCard"
import "./ProjectsSlideshow.css"
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects }) {
    useEffect(() => {
        const swiperEl = document.querySelector(".projects-swiper")
        const projectsVideos = document.querySelectorAll(".projects-swiper video")

        if (swiperEl && projectsVideos) {
            projectsVideos.forEach((item) => {
                item.addEventListener("play", () => {
                    if (!item.closest(".projects-slide").classList.contains("swiper-slide-active")) {
                        item.pause()
                        item.currentTime = 0
                    }
                })

                item.addEventListener("ended", () => {
                    item.currentTime = 0
                })

                item.addEventListener("contextmenu", (e) => e.preventDefault())
            })

            swiperEl.addEventListener("swiperslidechangetransitionend", () => {
                const activeSlideVideo = document.querySelector(".projects-swiper .swiper-slide-active video")

                projectsVideos.forEach((item) => {
                    if (!item.paused) {
                        item.pause()
                        item.currentTime = 0
                    }
                })

                if (activeSlideVideo) {
                    activeSlideVideo.play()
                }
            })
        }
    }, [])

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
                <swiper-slide key={`slide-${item.id}`} /* lazy="true" */ class="projects-slide flex justify-center items-center pb-s-fl-m">
                    <ProjectCard
                        training={item.training}
                        name={item.name}
                        coverUrl={item.coverUrl}
                        coverVideoUrl={item.coverVideoUrl}
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