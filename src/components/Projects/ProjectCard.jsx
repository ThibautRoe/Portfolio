import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function ProjectCard(props) {
    return (
        <div className="flex flex-grow flex-col max-h-[70dvh] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%]">
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={props.coverUrl}
                    alt={props.name}
                    placeholder="blur"
                    blurDataURL={props.coverBlur}
                    sizes="(width > 1500px) 50vw, (width > 1200px) 70vw, 80vw"
                    fill
                    className="rounded-t-s-fl-s object-cover object-top" // TODO Ajuster les tailles
                />
            </div>
            <div className="rounded-b-s-fl-s flex flex-col gap-s-fl-2xs-xs bg-gradient-to-b from-custom-500 to-custom-700 p-s-fl-2xs-xs">
                <div className="flex items-center gap-s-fl-l">
                    <p className="flex-grow font-paytoneOne">{props.name}</p>
                    <div className="flex gap-s-fl-l text-t-fl-l">
                        {props.github && (
                            <Link
                                href={props.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le code sur Github (nouvel onglet)"
                                className="hover:drop-shadow-md"
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
                        {props.figma && (
                            <Link
                                href={props.figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir la maquette sur Figma (nouvel onglet)"
                                className="hover:drop-shadow-md"
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
                        {props.livePreview && (
                            <Link
                                href={props.livePreview}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le site (nouvel onglet)"
                                className="hover:drop-shadow-md"
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
                {props.training && <p className="text-t-fl-xs"> - Projet de formation - </p>}
                <p className="text-t-fl-s italic">{props.activity}</p>
                <p className="text-t-fl-s">{props.description}</p>
                <div className="flex flex-wrap gap-s-fl-s text-t-fl-s">
                    {props.techStack.map((item) => (
                        <p key={item} className="rounded-full border-[1px] border-solid border-neutral-50 px-s-fl-xs py-s-fl-3xs">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
