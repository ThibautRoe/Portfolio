import dynamic from "next/dynamic"
import useGetContentfulData from "../hooks/useGetContentfulData"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Presentation from "../components/Presentation"
import Skills from "../components/Skills"
const DynamicProjects = dynamic(() => import("../components/Projects"), { ssr: false })
// import ContactForm from "../components/ContactForm"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default async function Home() {
    // await new Promise((res) => setTimeout(res, 2000)) // To test loading.jsx page

    const { projects, skills } = await useGetContentfulData()

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Presentation />
                {/* <Skills skills={skills} /> */}
                {/* <DynamicProjects projects={projects} /> */}
                <Contact />
            </main>
            <Footer />
        </>
    )
}
