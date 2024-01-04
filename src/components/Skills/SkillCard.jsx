import Link from "next/link"
import Image from "next/image"

export default function SkillCard({ name, icon, url }) {
    const iconUrl = "https:" + icon?.fields.file.url

    if (url) {
        return (
            <div
                title={name}
                className="skill-card rounded-s-fl-xs h-s-fl-2xl w-s-fl-2xl transform-gpu overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-s-fl-2xs drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:drop-shadow-lg"
            >
                <Link href={url} target="_blank" rel="noopener noreferrer">
                    <Image src={iconUrl} alt={name} width={100} height={100} />
                </Link>
            </div>
        )
    } else {
        return (
            <div
                title={name}
                className="skill-card rounded-s-fl-xs h-s-fl-2xl w-s-fl-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-s-fl-2xs drop-shadow-md"
            >
                <Image src={iconUrl} alt={name} width={100} height={100} />
            </div>
        )
    }
}
