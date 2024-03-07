import useGetContentfulData from "@/hooks/useGetContentfulData"
import Skills from "@/components/skills-and-projects/skills"
import Projects from "@/components/skills-and-projects/projects"

export default async function SkillsAndProjects() {
    const { formattedSkills, formattedProjects } = await useGetContentfulData()

    return (
        <>
            <Skills skills={formattedSkills} />
            <Projects projects={formattedProjects} />
        </>
    )
}
