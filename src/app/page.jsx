import useGetContentfulData from "@/hooks/useGetContentfulData"
import HomePage from "@/components/HomePage"

export default async function Page() {
    // await new Promise((res) => setTimeout(res, 5000)) // To test loading.jsx page

    const { formattedSkills, formattedProjects } = await useGetContentfulData()

    return <HomePage skills={formattedSkills} projects={formattedProjects} />
}
