import { createClient } from "contentful"

export default async function useGetContentfulData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const response = await client.getEntries()

    return response
}