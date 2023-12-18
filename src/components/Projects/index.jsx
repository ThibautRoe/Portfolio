import dynamic from "next/dynamic"
import "./Styles/projects.css"

const DynamicSlideshow = dynamic(() => import("./Components/Slideshow"), { ssr: false })

export default function Projects({ projects }) {
    return (
        <section className="bg-gradient-to-b from-custom-400 to-custom-300" id="projects">
            <div className="u-container flex min-h-screen flex-col">
                <h2 className="text-center font-paytoneOne text-t-fl-xl">Mes réalisations</h2>
                <div className="flex flex-grow items-center justify-center">
                    <DynamicSlideshow projects={projects} />
                </div>
            </div>
        </section>
    )
}
