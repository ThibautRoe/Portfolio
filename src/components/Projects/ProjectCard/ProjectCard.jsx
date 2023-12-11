import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({ training, name, cover, coverBlur, activity, description, techStack, github, livePreview }) {
    const coverUrl = "https:" + cover.fields.file.url

    return (
        <div className="panel flex w-auto flex-col">
            <div className="relative h-96 w-auto overflow-hidden">
                <Image src={coverUrl} alt={name} placeholder="blur" blurDataURL={coverBlur} sizes="100vw" fill className="object-cover" />
            </div>
            {training && <p> - Projet de formation - </p>}
            <p>{name}</p>
            <p>{activity}</p>
            <p>{description}</p>
            <div>
                {techStack.map((item) => (
                    <span key={item}> {item} </span>
                ))}
            </div>
            <div>
                {github && (
                    <Link href={github} target="_blank" rel="noopener noreferrer">
                        Git
                    </Link>
                )}
                {livePreview && (
                    <Link href={livePreview} target="_blank" rel="noopener noreferrer">
                        Live
                    </Link>
                )}
            </div>
        </div>
    )
}
