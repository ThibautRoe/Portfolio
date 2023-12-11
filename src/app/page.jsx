import useGetContentfulData from "../hooks/useGetContentfulData"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

export default async function Home() {
    // await new Promise((res) => setTimeout(res, 2000))

    const { projects, skills } = await useGetContentfulData()

    return (
        <main>
            <Hero />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Contact />
        </main>
    )
}
