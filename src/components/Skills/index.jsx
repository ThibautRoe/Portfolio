import SkillCard from "./Components/SkillCard"

export default function Skills({ skills }) {
    return (
        <div id="skills" className="">
            <p>Skills</p>
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
    )
}
