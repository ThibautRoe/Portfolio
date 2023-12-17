import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({ training, name, cover, coverBlur, activity, description, techStack, github, livePreview }) {
    const coverUrl = "https:" + cover.fields.file.url

    return (
        <div className="flex flex-col">
            <Image
                src={coverUrl}
                alt={name}
                placeholder="blur"
                blurDataURL={coverBlur}
                width={950}
                height={535}
                /* sizes="(width > 1500px) 50vw, (width > 1200px) 70vw, 80vw" 
                    fill
                    className="object-cover" */ /* TODO Ajuster les tailles */
            />

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
