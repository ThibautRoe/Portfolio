"use client"

import { useEffect } from "react"
import { InView } from "react-intersection-observer"
import ProjectsSlideshow from "./ProjectsSlideshow"

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
            className="nav-anchor bg-gradient-to-b from-custom-400 to-custom-300 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden snap-start flex flex-col min-h-screen"
        >
            <div className="u-container flex flex-col flex-grow gap-s-fl-xl">
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <h2
                            ref={ref}
                            className={`text-center font-paytoneOne text-t-fl-xl motion-safe:animate-fade-down motion-safe:animate-delay-300 ${
                                inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
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
                            className={`flex flex-grow items-stretch justify-center motion-safe:animate-fade motion-safe:animate-delay-300 motion-safe:animate-duration-[2500ms] ${
                                inView ? "motion-safe:animate-play" : "motion-safe:animate-stop"
                            }`}
                        >
                            <ProjectsSlideshow projects={projects} />
                        </div>
                    )}
                </InView>
            </div>
        </section>
    )
}
