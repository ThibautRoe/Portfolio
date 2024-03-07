"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import ProjectsSlideshow from "./projects-slideshow"

export default function Projects({ projects }) {
    useEffect(() => {
        function handleResizeProjects() {
            const nav = document.querySelector("nav")
            const projectsSection = document.getElementById("projects")

            if (nav && projectsSection) {
                projectsSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
            }
        }

        handleResizeProjects()

        window.addEventListener("resize", handleResizeProjects)

        return () => {
            window.removeEventListener("resize", handleResizeProjects)
        }
    }, [])

    return (
        <section
            id="projects"
            className="nav-anchor color-transition bg-gradient-to-b from-white/0 to-white/15 bg-custom-400 dark:bg-neutral-900 overflow-hidden snap-start flex min-h-screen"
        >
            <div className="u-container flex flex-col gap-s-fl-xl w-full">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`text-center font-paytoneOne text-t-fl-xl motion-reduce:animate-none animate-fade-down animate-delay-300 ${
                                inView ? "animate-play" : "animate-stop"
                            }`}
                        >
                            Mes réalisations
                        </h2>
                    )}
                </InView>
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div
                            ref={ref}
                            className={`flex flex-grow justify-center items-center motion-reduce:animate-none animate-fade animate-delay-300 animate-duration-[2500ms] ${
                                inView ? "animate-play" : "animate-stop"
                            }`}
                        >
                            <ProjectsSlideshow projects={projects} sectionInView={inView} />
                        </div>
                    )}
                </InView>
            </div>
        </section>
    )
}
