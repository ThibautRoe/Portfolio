"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ProjectCard from "./project-card"
import AnimatedButton from "@/components/ui/animated-button"
import BaseIcon from "@/components/ui/icons/base-icon"
import IconChevronRight from "@/components/ui/icons/src/animated-on-render/icon-chevron-right"
import useReduceMotion from "@/hooks/useReduceMotion"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/a11y"
import "swiper/css/effect-coverflow"
import "swiper/css/keyboard"
import "swiper/css/mousewheel"
import "swiper/css/navigation"
import "swiper/css/pagination"

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

    function handleVideoEnded(event) {
        const video = event.target
        const playButton = findPlayButton(video)
        video.currentTime = 0
        playButton?.classList.remove("hidden")
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

    function handleContextMenu(event) {
        event.preventDefault()
    }

    function initVideosEventHandlers() {
        const projectsVideos = document.querySelectorAll(`${projectsSwiperSelector} video`)

        if (projectsVideos) {
            projectsVideos.forEach((video) => {
                video.addEventListener("contextmenu", handleContextMenu)
                video.addEventListener("ended", handleVideoEnded)
            })
        }
    }

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
        <div ref={ref} className="w-full">
            <Swiper
                className="projects-swiper w-full"
                modules={[A11y, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination]}
                a11y={{
                    firstSlideMessage: "Première slide",
                    lastSlideMessage: "Dernière slide",
                    nextSlideMessage: "Slide suivante",
                    paginationBulletMessage: "Aller à la slide {{index}}",
                    prevSlideMessage: "Slide précédente",
                }}
                centeredSlides
                coverflowEffect={{ slideShadows: false }}
                effect={"coverflow"}
                grabCursor
                keyboard
                longSwipesRatio={0.25}
                mousewheel={{ forceToAxis: true }}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={"auto"}
                onSwiper={(swiper) => initVideosEventHandlers()}
                onSlideChangeTransitionEnd={() => handleVideosOnSlideChange()}
            >
                {projects.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        /* lazy="true" */
                        className="project-slide self-center max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] pb-s-fl-l"
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
                    </SwiperSlide>
                ))}
                <SwiperSlide className="project-slide self-center max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] pb-s-fl-l">
                    <div className="rounded-s-fl-s flex justify-center items-center color-transition bg-gradient-to-tl from-white/0 to-white/30 bg-neutral-500 dark:bg-neutral-700 aspect-[1.5/1] w-full min-h-[300px] max-h-[75dvh] drop-shadow-lg">
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
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
