import dynamic from "next/dynamic"

const DynamicSlideshow = dynamic(() => import("./Components/Slideshow"), { ssr: false })

export default function Projects({ projects }) {
    return (
        <div id="projects" className="flex justify-center">
            <p>Réalisations</p>
            <DynamicSlideshow projects={projects} />
        </div>
    )
}
