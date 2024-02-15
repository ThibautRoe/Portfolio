"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./ProjectCard"
import useReduceMotion from "@/hooks/useReduceMotion"
import "./ProjectsSlideshow.css"
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects }) {
    const reduceMotion = useReduceMotion()

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        delay: 2000,
    })

    useEffect(() => {
        const swiperEl = document.querySelector(".projects-swiper")
        const projectsVideos = document.querySelectorAll(".projects-swiper video")

        if (swiperEl && projectsVideos) {
            projectsVideos.forEach((video) => {
                video.addEventListener("ended", () => {
                    video.currentTime = 0
                })
                video.addEventListener("contextmenu", (e) => e.preventDefault())
            })

            swiperEl.addEventListener("swiperslidechangetransitionend", () => {
                const activeSlideVideo = document.querySelector(".projects-swiper .swiper-slide-active video")
                const playButtonActiveVideo = activeSlideVideo.nextElementSibling

                projectsVideos.forEach((video) => {
                    const playButton = video.nextElementSibling

                    if (!video.paused) {
                        video.pause()
                    }

                    video.currentTime = 0

                    playButton.classList.remove("hidden")
                })

                if (activeSlideVideo && !reduceMotion) {
                    playButtonActiveVideo.classList.add("hidden")

                    activeSlideVideo.play()
                }
            })
        }
    }, [])

    useEffect(() => {
        const projectsVideos = document.querySelectorAll(".projects-swiper video")
        const activeSlideVideo = document.querySelector(".projects-swiper .swiper-slide-active video")
        const playButtonActiveVideo = activeSlideVideo.nextElementSibling

        if (!inView && projectsVideos) {
            projectsVideos.forEach((video) => {
                const playButton = video.nextElementSibling

                if (!video.paused) {
                    video.pause()
                }
                video.currentTime = 0

                playButton.classList.remove("hidden")
            })
        }

        if (inView && activeSlideVideo && !reduceMotion) {
            playButtonActiveVideo.classList.add("hidden")

            activeSlideVideo.play()
        }
    }, [inView])

    function toggleVideo() {
        const activeSlideVideo = document.querySelector(".projects-swiper .swiper-slide-active video")
        const playButtonActiveVideo = activeSlideVideo.nextElementSibling

        if (!activeSlideVideo.paused) {
            activeSlideVideo.pause()

            playButtonActiveVideo.classList.remove("hidden")
        } else {
            playButtonActiveVideo.classList.add("hidden")

            activeSlideVideo.play()
        }
    }

    return (
        <swiper-container
            ref={ref}
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
                        actionOnClick={toggleVideo}
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
