"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./project-card"
import AnimatedButton from "@/components/ui/animated-button"
import BaseIcon from "@/components/ui/icons/BaseIcon"
import IconChevronRight from "@/components/ui/icons/src/AnimatedOnRender/IconChevronRight"
import useReduceMotion from "@/hooks/useReduceMotion"
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects, sectionInView }) {
    const projectsSwiperSelector = ".projects-swiper"
    const activeSlideSelector = ".projects-swiper .swiper-slide-active video"
    const reduceMotion = useReduceMotion()
    const preload = "auto"

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        delay: 1500,
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
        if (video.paused) {
            const playPromise = video.play()

            if (playPromise !== undefined) {
                playPromise
                    .then((_) => {
                        video.classList.remove("blur-md")
                        playButton.classList.add("hidden")
                    })
                    .catch((error) => {
                        console.error("Failed to play video", error)
                    })
            }
        }
    }

    function handleVideosOnSlideChange() {
        const projectsVideos = document.querySelectorAll(`${projectsSwiperSelector} video`)
        const activeSlideVideo = document.querySelector(activeSlideSelector)

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
        const activeSlideVideo = document.querySelector(activeSlideSelector)
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
                video.addEventListener("contextmenu", handleContextMenu)
                video.addEventListener("ended", handleVideoEnded)
            })
        }

        return () => {
            if (swiperEl && projectsVideos) {
                swiperEl.removeEventListener("swiperslidechangetransitionend", handleVideosOnSlideChange)
                projectsVideos.forEach((video) => {
                    video.removeEventListener("contextmenu", handleContextMenu)
                    video.removeEventListener("ended", handleVideoEnded)
                })
            }
        }
    }, [reduceMotion]) // reduceMotion plutôt que [] car sinon le useEffect est appelé avant que reduceMotion ne soit initialisé avec le résultat de useReduceMotion() et les eventListeners seront initialisés avec des fonctions qui prendront "undefined" comme valeur pour reduceMotion

    useEffect(() => {
        const projectsVideos = document.querySelectorAll(`${projectsSwiperSelector} video`)
        const activeSlideVideo = document.querySelector(activeSlideSelector)

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
            class="projects-swiper w-full h-full"
            a11y="true"
            centered-slides="true"
            effect="coverflow"
            coverflow-effect-slide-shadows="false"
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            slides-per-view="auto"
            stretch="500"
        >
            {projects.map((item) => (
                <swiper-slide
                    key={item.id}
                    /* lazy="true" */
                    class="project-slide flex items-center max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] drop-shadow-lg pb-s-fl-l"
                >
                    <ProjectCard
                        sectionInView={sectionInView}
                        actionOnClick={toggleVideo}
                        preload={preload}
                        training={item.training}
                        name={item.name}
                        coverVideos={item.coverVideos}
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
            <swiper-slide class="project-slide flex items-center max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] drop-shadow-lg pb-s-fl-l">
                <div className="rounded-s-fl-s flex justify-center items-center aspect-[1.5/1] w-full min-h-[285px] max-h-[75dvh] color-transition bg-gradient-to-tl from-white/0 to-white/30 bg-neutral-500 dark:bg-neutral-700">
                    <h3>
                        <AnimatedButton
                            link="https://www.malt.fr/profile/thibautroegiers"
                            text="Plus de projets"
                            bigText
                            iconBefore={
                                <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <IconChevronRight />
                                </BaseIcon>
                            }
                        />
                    </h3>
                </div>
            </swiper-slide>
        </swiper-container>
    )
}
