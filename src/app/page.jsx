import useGetContentfulData from "@/hooks/useGetContentfulData"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"

export default async function HomePage() {
    // await new Promise((res) => setTimeout(res, 5000)) // To test loading.jsx page

    const { formattedSkills, formattedProjects } = await useGetContentfulData()

    return (
        <>
            <Header />
            <Main skills={formattedSkills} projects={formattedProjects} />
            <Footer />
        </>
    )
}
