import SkillCard from "./Components/SkillCard"

export default function Skills({ skills }) {
    return (
        <div className="bg-gradient-to-b from-custom-400 to-custom-300" id="skills">
            <div className="u-container flex min-h-screen flex-col items-center gap-s-fl-2xl font-paytoneOne text-neutral-50">
                <p className="text-t-fl-xl">Mes compétences</p>
                <div className="flex flex-row gap-5">
                    <p>Backend</p>
                    {skills.backend.map((item) => (
                        <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                    ))}
                </div>
                <div className="flex flex-row gap-5">
                    <p>Frontend</p>
                    {skills.frontend.map((item) => (
                        <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                    ))}
                </div>
                <div className="flex flex-row gap-5">
                    <p>Autre</p>
                    {skills.other.map((item) => (
                        <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                    ))}
                </div>
                {/* <div className="flex flex-row gap-5">
                <p>Softskills</p>
                {skills.softskills.map((item) => (
                    <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                ))}
            </div> */}
            </div>
        </div>
    )
}
