export default function Projects({ projects }) {
    return (
        <div id="projects" className="">
            <p>Projects</p>
            {projects.map(item => (<p key={item.sys.id}>{item.fields.name}</p>))}
        </div >
    )
}
