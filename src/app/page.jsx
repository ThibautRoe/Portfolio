import dynamic from "next/dynamic"
import useGetContentfulData from "../hooks/useGetContentfulData"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import ContactForm from "../components/Contact/ContactForm"

const DynamicProjects = dynamic(() => import("../components/Projects/Projects"), { ssr: false })

export default async function Home() {
    // await new Promise((res) => setTimeout(res, 2000))

    const { projects, skills } = await useGetContentfulData()

    return (
        <main>
            <Hero />
            <Skills skills={skills} />
            <DynamicProjects projects={projects} />
            <ContactForm />
        </main>
    )
}
