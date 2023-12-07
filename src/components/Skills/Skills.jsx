export default function Skills({ skills }) {
    return (
        <div id="skills" className="">
            <p>Skills</p>
            {skills.map(item => (<p key={item.sys.id}>{item.fields.name}</p>))}
        </div >
    )
}
