import useGetContentfulData from "@/hooks/useGetContentfulData"
import Skills from "@/components/SkillsAndProjects/Skills"
import Projects from "@/components/SkillsAndProjects/Projects"

export default async function SkillsAndProjects() {
    const { formattedSkills, formattedProjects } = await useGetContentfulData()

    return (
        <>
            <Skills skills={formattedSkills} />
            <Projects projects={formattedProjects} />
        </>
    )
}
