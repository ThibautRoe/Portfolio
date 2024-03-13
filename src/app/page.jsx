import Header from "@/components/Header"
import Main from "@/components/Main"
import SkillsAndProjects from "@/components/SkillsAndProjects"
import Footer from "@/components/Footer"

export default function HomePage() {
    // await new Promise((res) => setTimeout(res, 5000)) // To test loading.jsx page

    return (
        <>
            <Header />
            <Main skillsAndProjectsComponent={<SkillsAndProjects />} />
            <Footer />
        </>
    )
}
