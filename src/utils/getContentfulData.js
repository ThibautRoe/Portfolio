import { createClient } from "contentful"

export default async function getContentfulData() {
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
            coverUrl: "https:" + item.fields.cover.fields.file.url,
            coverVideoUrl: item.fields.coverVideo ? "https:" + item.fields.coverVideo.fields.file.url : "",
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
