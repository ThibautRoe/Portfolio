import { createClient } from "contentful"

export default async function useGetContentfulData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const response = await client.getEntries()

    const projects = response.items.filter((item) => item.sys.contentType.sys.id === "project")
    projects.sort((b, a) => a.fields.projectNumber - b.fields.projectNumber)

    const skillsBackend = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Backend")
    skillsBackend.sort((a, b) => a.fields.order - b.fields.order)

    const skillsFrontend = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Frontend")
    skillsFrontend.sort((a, b) => a.fields.order - b.fields.order)

    const skillsOther = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Other")
    skillsOther.sort((a, b) => a.fields.order - b.fields.order)

    const skillsSoftskill = response.items.filter((item) => item.sys.contentType.sys.id === "skill" && item.fields.type === "Softskill")
    skillsSoftskill.sort((a, b) => a.fields.order - b.fields.order)

    const skills = {
        backend: skillsBackend,
        frontend: skillsFrontend,
        other: skillsOther,
        softskills: skillsSoftskill,
    }

    return { projects, skills }
}
