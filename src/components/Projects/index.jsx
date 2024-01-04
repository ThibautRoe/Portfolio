"use client"

import { useRef, useEffect } from "react"
import ProjectsSlideshow from "./ProjectsSlideshow"

export default function Projects({ projects }) {
    const projectsSectionRef = useRef(null)

    function handleResizeProjects() {
        const nav = document.querySelector("nav")
        const projectsSection = projectsSectionRef.current

        if (nav && projectsSection) {
            projectsSection.style.paddingBottom = window.innerWidth < 1024 ? `${nav.offsetHeight}px` : ""
        }
    }

    useEffect(() => {
        handleResizeProjects()

        window.addEventListener("resize", handleResizeProjects)

        return () => {
            window.removeEventListener("resize", handleResizeProjects)
        }
    }, [])

    return (
        <section
            ref={projectsSectionRef}
            id="projects"
            className="bg-gradient-to-b from-custom-400 to-custom-300 overflow-hidden snap-start h-dvh"
        >
            <div className="u-container flex flex-col gap-s-fl-xl h-full">
                <h2 className="text-center font-paytoneOne text-t-fl-xl">Mes réalisations</h2>
                <div className="flex flex-grow items-stretch justify-center">
                    <ProjectsSlideshow projects={projects} />
                </div>
            </div>
        </section>
    )
}
