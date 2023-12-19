import SkillCard from "./Components/SkillCard"
import dynamic from "next/dynamic"
import "./Styles/projects.css"

const DynamicSlideshow = dynamic(() => import("./Components/SkillsSlideshow"), { ssr: false })

export default function Skills({ skills }) {
    return (
        <section className="bg-gradient-to-b from-custom-400 to-custom-300" id="skills">
            <div className="u-container flex min-h-screen flex-col items-center gap-s-fl-2xl font-paytoneOne">
                <h2 className="text-t-fl-xl">Mes compétences</h2>
                <div className="flex flex-grow flex-col items-center">
                    <div className="grid flex-grow grid-cols-3 gap-s-fl-xs">
                        <div className="flex flex-col items-center px-s-fl-l">
                            <p className="text-t-fl-l">Backend</p>
                            <div className="flex flex-grow items-center">
                                <div className="flex flex-wrap justify-center gap-s-fl-xl">
                                    {skills.backend.map((item) => (
                                        <SkillCard
                                            key={item.sys.id}
                                            name={item.fields.name}
                                            icon={item.fields.icon}
                                            url={item.fields.url}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-s-fl-l">
                            <p className="text-t-fl-l">Frontend</p>
                            <div className="flex flex-grow items-center">
                                <div className="flex flex-wrap justify-center gap-s-fl-xl">
                                    {skills.frontend.map((item) => (
                                        <SkillCard
                                            key={item.sys.id}
                                            name={item.fields.name}
                                            icon={item.fields.icon}
                                            url={item.fields.url}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-s-fl-l">
                            <p className="text-t-fl-l">Autre</p>
                            <div className="flex flex-grow items-center">
                                <div className="flex flex-wrap justify-center gap-s-fl-xl">
                                    {skills.other.map((item) => (
                                        <SkillCard
                                            key={item.sys.id}
                                            name={item.fields.name}
                                            icon={item.fields.icon}
                                            url={item.fields.url}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-row gap-5">
                <p>Softskills</p>
                {skills.softskills.map((item) => (
                    <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                ))}
            </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
