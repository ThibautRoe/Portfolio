import dynamic from "next/dynamic"

const DynamicSlideshow = dynamic(() => import("./Components/Slideshow"), { ssr: false })

export default function Projects({ projects }) {
    return (
        <section>
            <div id="projects" className="flex justify-center">
                <h2>Mes réalisations</h2>
                <DynamicSlideshow projects={projects} />
            </div>
        </section>
    )
}
