import dynamic from "next/dynamic"

const DynamicSlideshow = dynamic(() => import("./Components/SkillsSlideshow"), { ssr: false })

export default function Skills({ skills }) {
    return (
        <section className="bg-gradient-to-b from-custom-400 to-custom-300" id="skills">
            <div className="u-container flex min-h-screen flex-col items-center gap-s-fl-2xl font-paytoneOne">
                <h2 className="text-t-fl-xl">Mes compétences</h2>
                <div className="flex flex-grow self-stretch justify-center">
                    <DynamicSlideshow skills={skills} />
                </div>
            </div>
        </section>
    )
}
