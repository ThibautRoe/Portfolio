import Header from "@/components/header"
import Main from "@/components/main"
import SkillsAndProjects from "@/components/skills-and-projects"
import Footer from "@/components/footer"

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
