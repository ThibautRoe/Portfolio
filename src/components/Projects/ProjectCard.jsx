import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function ProjectCard({ training, name, cover, coverBlur, activity, description, techStack, github, figma, livePreview }) {
    const coverUrl = "https:" + cover.fields.file.url

    return (
        <div className="flex flex-grow flex-col max-h-[70dvh] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%]">
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={coverUrl}
                    alt={name}
                    placeholder="blur"
                    blurDataURL={coverBlur}
                    sizes="(width > 1500px) 50vw, (width > 1200px) 70vw, 80vw"
                    fill
                    className="rounded-t-s-fl-s object-cover object-top" // TODO Ajuster les tailles
                />
            </div>
            <div className="rounded-b-s-fl-s flex flex-col gap-s-fl-2xs-xs bg-gradient-to-b from-custom-500 to-custom-700 p-s-fl-2xs-xs">
                <div className="flex items-center gap-s-fl-l">
                    <p className="flex-grow font-paytoneOne">{name}</p>
                    <div className="flex gap-s-fl-l text-t-fl-l">
                        {github && (
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le code sur Github (nouvel onglet)"
                                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        )}
                        {figma && (
                            <Link
                                href={figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir la maquette sur Figma (nouvel onglet)"
                                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md"
                            >
                                <FontAwesomeIcon icon={faFigma} />
                            </Link>
                        )}
                        {livePreview && (
                            <Link
                                href={livePreview}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le site (nouvel onglet)"
                                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </Link>
                        )}
                    </div>
                </div>
                {training && <p className="text-t-fl-xs"> - Projet de formation - </p>}
                <p className="text-t-fl-s italic">{activity}</p>
                <p className="text-t-fl-s">{description}</p>
                <div className="flex flex-wrap gap-s-fl-s text-t-fl-s">
                    {techStack.map((item) => (
                        <p key={item} className="rounded-full border-[1px] border-solid border-neutral-50 px-s-fl-xs py-s-fl-3xs">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
