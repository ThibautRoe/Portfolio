import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function ProjectCard(props) {
    const { training, name, coverUrl, coverVideoUrl, coverBlur, activity, description, techStack, github, figma, livePreview } = props

    return (
        <div className="relative flex flex-grow flex-col min-h-[250px] max-h-[70dvh] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] drop-shadow-lg">
            {training && (
                <div className="ribbon absolute z-10 w-[150px] h-[150px] top-0 right-0 overflow-hidden">
                    <span className="absolute w-[225px] top-[--fluid-ribbon-top] -left-[--fluid-ribbon-left] py-s-fl-3xs text-center text-t-fl-xs text-custom-700 bg-custom-300 rotate-45">
                        - Projet de formation -
                    </span>
                </div>
            )}
            <div className="relative aspect-[16/9] rounded-t-s-fl-s overflow-hidden">
                {coverVideoUrl ? (
                    <video
                        muted
                        playsInline
                        src={`${coverVideoUrl}#t=0.001`} /* Trick to get the first frame to show on iOS, see: https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/ */
                        className="absolute w-full h-full object-cover object-top"
                    >
                        Votre navigateur ne prend pas en charge les vidéos
                    </video>
                ) : (
                    <Image
                        src={coverUrl}
                        alt={name}
                        placeholder="blur"
                        blurDataURL={coverBlur}
                        sizes="(max-width: 1025px) 95vw, (max-width: 1500px) 85vw, 75vw"
                        fill
                        className="w-full h-full object-cover object-top"
                    />
                )}
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
                                className="hover:shadow-md"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </motion.div>
                            </Link>
                        )}
                        {figma && (
                            <Link
                                href={figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir la maquette sur Figma (nouvel onglet)"
                                className="hover:shadow-md"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <FontAwesomeIcon icon={faFigma} />
                                </motion.div>
                            </Link>
                        )}
                        {livePreview && (
                            <Link
                                href={livePreview}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le site (nouvel onglet)"
                                className="hover:shadow-md"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </motion.div>
                            </Link>
                        )}
                    </div>
                </div>
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
