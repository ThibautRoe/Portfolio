import useGetContentfulData from '../hooks/useGetContentfulData'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default async function Home() {
    await new Promise((res) => setTimeout(res, 2000))

    const response = await useGetContentfulData()
    const projects = response.items.filter((item) => item.sys.contentType.sys.id === "project")
    const skills = response.items.filter((item) => item.sys.contentType.sys.id === "skill")

    return (
        <main>
            <Hero />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Contact />
        </main>
    );
}