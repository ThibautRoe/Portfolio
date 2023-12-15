import dynamic from "next/dynamic"
import useGetContentfulData from "../hooks/useGetContentfulData"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
const DynamicProjects = dynamic(() => import("../components/Projects/Projects"), { ssr: false })
// import Contact from "../components/Contact/Contact"
import ContactForm from "../components/ContactForm/ContactForm"
import Footer from "../components/Footer/Footer"

export default async function Home() {
    // await new Promise((res) => setTimeout(res, 2000)) // To test loading.jsx page

    const { projects, skills } = await useGetContentfulData()

    return (
        <>
            <Header />
            <main>
                {/* <Hero /> */}
                {/* <Skills skills={skills} /> */}
                {/* <DynamicProjects projects={projects} /> */}
                {/* <Contact /> */}
            </main>
            {/* <Footer /> */}
        </>
    )
}
