import { createClient } from "contentful"

export default async function useGetContentfulData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const response = await client.getEntries()

    const projects = response.items.filter((item) => item.sys.contentType.sys.id === "project")
    projects.sort((b, a) => a.fields.projectNumber - b.fields.projectNumber)

    const formattedProjects = projects.map((item) => {
        return {
            id: item.sys.id,
            training: item.fields.training,
            name: item.fields.name,
            coverVideos: {
                coverVideoOriginalUrl: item.fields.coverVideoOriginal ? "https:" + item.fields.coverVideoOriginal.fields.file.url : "",
                coverVideoW400Url: item.fields.coverVideoW400 ? "https:" + item.fields.coverVideoW400.fields.file.url : "",
                coverVideoW600Url: item.fields.coverVideoW600 ? "https:" + item.fields.coverVideoW600.fields.file.url : "",
                coverVideoW800Url: item.fields.coverVideoW800 ? "https:" + item.fields.coverVideoW800.fields.file.url : "",
                coverVideoW1000Url: item.fields.coverVideoW1000 ? "https:" + item.fields.coverVideoW1000.fields.file.url : "",
                coverVideoW1200Url: item.fields.coverVideoW1200 ? "https:" + item.fields.coverVideoW1200.fields.file.url : "",
            },
            coverUrl: "https:" + item.fields.cover.fields.file.url,
            coverBlur: item.fields.coverBlur,
            activity: item.fields.activity,
            description: item.fields.description,
            techStack: item.fields.techStack,
            github: item.fields.github,
            figma: item.fields.figma,
            livePreview: item.fields.livePreview,
        }
    })

    const skillsFrontend = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Frontend")
    skillsFrontend.sort((a, b) => a.fields.order - b.fields.order)

    const formattedskillsFrontend = skillsFrontend.map((item) => {
        return {
            id: item.sys.id,
            name: item.fields.name,
            iconUrl: "https:" + item.fields.icon.fields.file.url,
            officialWebsite: item.fields.url,
        }
    })

    const skillsBackend = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Backend")
    skillsBackend.sort((a, b) => a.fields.order - b.fields.order)

    const formattedskillsBackend = skillsBackend.map((item) => {
        return {
            id: item.sys.id,
            name: item.fields.name,
            iconUrl: "https:" + item.fields.icon.fields.file.url,
            officialWebsite: item.fields.url,
        }
    })

    const skillsOther = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Other")
    skillsOther.sort((a, b) => a.fields.order - b.fields.order)

    const formattedskillsOther = skillsOther.map((item) => {
        return {
            id: item.sys.id,
            name: item.fields.name,
            iconUrl: "https:" + item.fields.icon.fields.file.url,
            officialWebsite: item.fields.url,
        }
    })

    const skillsSoftskill = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Softskill")
    skillsSoftskill.sort((a, b) => a.fields.order - b.fields.order)

    const formattedskillsSoftskill = skillsSoftskill.map((item) => {
        return {
            id: item.sys.id,
            name: item.fields.name,
        }
    })

    const formattedSkills = [
        { name: "Front-end", value: formattedskillsFrontend },
        { name: "Back-end", value: formattedskillsBackend },
        { name: "Autres", value: formattedskillsOther },
        // { name: "Soft-skills", value: formattedskillsSoftskill },
    ]

    return { formattedProjects, formattedSkills }
}
