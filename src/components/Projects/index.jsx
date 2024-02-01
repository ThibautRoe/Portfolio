"use client"

import { useEffect } from "react"
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
            className="nav-anchor bg-gradient-to-b from-custom-400 to-custom-300 overflow-hidden snap-start flex flex-col min-h-screen"
        >
            <div className="u-container flex flex-col flex-grow gap-s-fl-xl">
                <h2 className="text-center font-paytoneOne text-t-fl-xl">Mes réalisations</h2>
                <div className="flex flex-grow items-stretch justify-center">
                    <ProjectsSlideshow projects={projects} />
                </div>
            </div>
        </section>
    )
}
