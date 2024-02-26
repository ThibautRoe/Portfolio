"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./ProjectCard"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconChevronRight from "@/components/Icons/src/AnimatedOnRender/IconChevronRight"
import useReduceMotion from "@/hooks/useReduceMotion"
import { register } from "swiper/element/bundle"
register()

export default function ProjectsSlideshow({ projects, sectionInView }) {
    const projectsSwiperSelector = ".projects-swiper"
    const slideSelector = ".project-slide"
    const activeSlideSelector = ".swiper-slide-active"
    const reduceMotion = useReduceMotion()
    const preload = "auto"

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        delay: 1500,
    })

    function findActiveSlideVideo() {
        const activeSlideShadowDom = document.querySelector(projectsSwiperSelector).shadowRoot.querySelector(activeSlideSelector).part[1]
        const activeVideoLightDom = document.querySelector(`${slideSelector}[slot='${activeSlideShadowDom}'] video`)

        return activeVideoLightDom
    }

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
        const activeSlideVideo = findActiveSlideVideo()

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
        const activeSlideVideo = findActiveSlideVideo()
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
        const activeSlideVideo = findActiveSlideVideo()

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
            class="projects-swiper w-full"
            a11y="true"
            cards-effect-slide-shadows="false"
            effect="cards"
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
        >
            {projects.map((item, index) => (
                <div
                    // <div slot="slide-x"> instead of <swiper-slide> to prevent a bug in Safari desktop: https://swiperjs.com/blog/slide-slots-in-v10-1-0
                    // Works great on Safari but it has downsides: the <swiper-slide> (with classes like "swiper-slide-active") are in the shadow DOM and <video> are in the light DOM so it's less easy than before to identify which video is on the active slide
                    // See this commit for code before this changes: https://github.com/ThibautRoe/Portfolio/commit/4341c3641906e2de53f53d262ab9e33782970ca4
                    key={`slide-${item.id}`}
                    slot={`slide-${index}`}
                    /* lazy="true" */
                    className="project-slide self-center flex justify-center items-center drop-shadow-lg"
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
                </div>
            ))}
            <div
                key={`slide-malt-profile`}
                slot={`slide-${projects.length}`}
                className="project-slide self-center flex justify-center items-center drop-shadow-lg"
            >
                <div className="rounded-s-fl-s flex flex-grow justify-center items-center aspect-[1.5/1] w-full min-h-[285px] max-h-[75dvh] max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] color-transition bg-gradient-to-tl from-white/0 to-white/30 bg-neutral-500 dark:bg-neutral-700 mb-s-fl-l">
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
            </div>
        </swiper-container>
    )
}
