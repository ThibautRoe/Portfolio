"use client"

import { useForm } from "react-hook-form"
import sendEmail from "@/lib/sendEmail"

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => sendEmail(data)

    return (
        <div id="contact" className="">
            <p>Contact</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">
                    Prénom <span>*</span>
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Prénom"
                    {...register("firstName", { required: true })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    error={errors.firstName ? "true" : "false"}
                />

                <label htmlFor="lastName">
                    Nom <span>*</span>
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Nom"
                    {...register("lastName", { required: true })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    error={errors.lastName ? "true" : "false"}
                />

                <label htmlFor="email">
                    Email <span>*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    error={errors.email ? "true" : "false"}
                />

                <label htmlFor="phone">Téléphone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Téléphone"
                    {...register("phone", { valueAsNumber: true })}
                    aria-invalid={errors.phone ? "true" : "false"}
                    error={errors.phone ? "true" : "false"}
                />

                <label htmlFor="subject">
                    Sujet <span>*</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Sujet"
                    {...register("subject", { required: true })}
                    aria-invalid={errors.subject ? "true" : "false"}
                    error={errors.subject ? "true" : "false"}
                />

                <label htmlFor="message">
                    Votre message <span>*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    {...register("message", { required: true })}
                    aria-invalid={errors.message ? "true" : "false"}
                    error={errors.message ? "true" : "false"}
                ></textarea>

                <button type="submit">Envoyer mon message</button>
            </form>
        </div>
    )
}
