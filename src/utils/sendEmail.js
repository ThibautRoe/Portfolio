export default async function sendEmail(formDetails) {
    try {
        const apiEndpoint = process.env.NEXT_PUBLIC_EMAIL_API_ENDPOINT

        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDetails),
        })

        if (!response.ok) {
            throw new Error("Erreur lors de l'envoi du formulaire, merci d'envoyer un mail directement à hello@thibautroegiers.dev")
        }

        const data = await response.json()

        alert(data.message)
    } catch (error) {
        alert(error.message)
    }
}
