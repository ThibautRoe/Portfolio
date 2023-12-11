import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req) {
    try {
        const { firstName, lastName, email, phone, subject, message } = await req.json()

        const tel = phone || "Non renseigné"

        const transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        await sendEmail(transporter, { firstName, lastName, email, tel, subject, message })

        return NextResponse.json({ message: "Email envoyé avec succès !" })
    } catch (error) {
        console.error(error)
        return NextResponse.error(error)
    }
}

async function sendEmail(transporter, { firstName, lastName, email, tel, subject, message }) {
    const info = await transporter.sendMail({
        from: `${firstName} ${lastName} <${email}>`,
        to: "hello@thibautroegiers.dev",
        subject: subject,
        html: createEmailContent({ firstName, lastName, email, tel, subject, message }),
    })
}

function createEmailContent({ firstName, lastName, email, tel, subject, message }) {
    return `<div style="padding: 20px; max-width: 800px; margin: auto; font-family: system-ui; color: #333333">
                <h1>Nouveau formulaire de contact</h1>
                <h2>Prénom</h2>
                <p>${firstName}</p>
                <h2>Nom</h2>
                <p>${lastName}</p>
                <h2>Email</h2>
                <p>${email}</p>
                <h2>Téléphone</h2>
                <p>${tel}</p>
                <h2>Sujet</h2>
                <p>${subject}</p>
                <h2>Message</h2>
                <p>${message}</p>
            </div>`
}
