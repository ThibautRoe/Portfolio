"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./ProjectCard"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconChevronRight from "@/components/Icons/src/Animated/IconChevronRight"
import useReduceMotion from "@/hooks/useReduceMotion"
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects }) {
    const reduceMotion = useReduceMotion()
    const projectsSwiperSelector = ".projects-swiper"
    const activeVideoSelector = ".projects-swiper .swiper-slide-active video"

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        delay: 2000,
    })

    function findPlayButton(video) {
        let playButton = video.nextElementSibling
        while (playButton && playButton.tagName.toLowerCase() !== "button") {
            playButton = playButton.nextElementSibling
        }
        return playButton
    }

    function pauseVideo(video, playButton, doNotReset) {
        if (!video.paused) {
            video.pause()
        }
        if (!doNotReset) {
            video.currentTime = 0
        }
        playButton.classList.remove("hidden")
    }

    function playVideo(video, playButton) {
        playButton.classList.add("hidden")
        if (video.paused) {
            video.play()
        }
    }

    function handleVideosOnSlideChange() {
        const projectsVideos = document.querySelectorAll(`${projectsSwiperSelector} video`)
        const activeSlideVideo = document.querySelector(activeVideoSelector)

        projectsVideos.forEach((video) => {
            if (video !== activeSlideVideo) {
                pauseVideo(video, findPlayButton(video))
            } else if (!reduceMotion) {
                playVideo(video, findPlayButton(video))
            }
        })
    }

    function handleVideoEnded(event) {
        const video = event.target
        const playButton = findPlayButton(video)
        video.currentTime = 0
        playButton?.classList.remove("hidden")
    }

    function handleContextMenu(event) {
        event.preventDefault()
    }

    function toggleVideo() {
        const activeSlideVideo = document.querySelector(activeVideoSelector)
        const doNoReset = true

        if (activeSlideVideo) {
            if (!activeSlideVideo.paused) {
                pauseVideo(activeSlideVideo, findPlayButton(activeSlideVideo), doNoReset)
            } else {
                playVideo(activeSlideVideo, findPlayButton(activeSlideVideo))
            }
        }
    }

    useEffect(() => {
        const swiperEl = document.querySelector(projectsSwiperSelector)
        const projectsVideos = document.querySelectorAll(`${projectsSwiperSelector} video`)

        if (swiperEl && projectsVideos) {
            swiperEl.addEventListener("swiperslidechangetransitionend", handleVideosOnSlideChange)
            projectsVideos.forEach((video) => {
                video.addEventListener("ended", handleVideoEnded)
                video.addEventListener("contextmenu", handleContextMenu)
            })
        }

        return () => {
            if (swiperEl && projectsVideos) {
                swiperEl.removeEventListener("swiperslidechangetransitionend", handleVideosOnSlideChange)
                projectsVideos.forEach((video) => {
                    video.removeEventListener("ended", handleVideoEnded)
                    video.removeEventListener("contextmenu", handleContextMenu)
                })
            }
        }
    }, [])

    useEffect(() => {
        const projectsVideos = document.querySelectorAll(`${projectsSwiperSelector} video`)
        const activeSlideVideo = document.querySelector(activeVideoSelector)

        if (!inView && projectsVideos) {
            projectsVideos.forEach((video) => pauseVideo(video, findPlayButton(video)))
        }

        if (inView && activeSlideVideo && !reduceMotion) {
            playVideo(activeSlideVideo, findPlayButton(activeSlideVideo))
        }
    }, [inView])

    return (
        <swiper-container
            ref={ref}
            class="projects-swiper"
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
                <swiper-slide key={`slide-${item.id}`} /* lazy="true" */ class="projects-slide flex justify-center items-center">
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
            <swiper-slide key={`slide-malt-profile`} class="projects-slide flex justify-center items-center">
                <div className="rounded-s-fl-s flex flex-grow justify-center items-center aspect-[1.5/1] min-h-[250px] max-h-[70dvh] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] bg-gradient-to-tl from-white/0 to-white/30 bg-neutral-500 dark:bg-neutral-700 drop-shadow-lg">
                    <AnimatedButton
                        link="" /* TODO Mettre le lien vers mon profil */
                        text="Plus de projets"
                        bigText
                        iconBefore={
                            <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                <IconChevronRight />
                            </BaseIcon>
                        }
                    />
                </div>
            </swiper-slide>
        </swiper-container>
    )
}
