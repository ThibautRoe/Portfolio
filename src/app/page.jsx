import useGetContentfulData from "@/hooks/useGetContentfulData"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Presentation from "@/components/Presentation"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
// import ContactForm from "@/components/ContactForm"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default async function HomePage() {
    // await new Promise((res) => setTimeout(res, 5000)) // To test loading.jsx page

    const { formattedSkills, formattedProjects } = await useGetContentfulData()

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Presentation />
                <Skills skills={formattedSkills} />
                <Projects projects={formattedProjects} />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
