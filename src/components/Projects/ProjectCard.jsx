import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconGithubProjectCard from "@/components/Icons/src/NotAnimated/IconGithubProjectCard"
import IconFigma from "@/components/Icons/src/NotAnimated/IconFigma"
import IconArrowOutFromSquare from "@/components/Icons/src/NotAnimated/IconArrowOutFromSquare"
import PlayButton from "@/components/PlayButton"

export default function ProjectCard(props) {
    const {
        sectionInView,
        actionOnClick,
        preload,
        training,
        name,
        coverVideos,
        coverUrl,
        coverBlur,
        activity,
        description,
        techStack,
        github,
        figma,
        livePreview,
    } = props

    return (
        <div className="relative flex flex-grow flex-col min-h-[285px] max-h-[75dvh] max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] mb-s-fl-l">
            {training && (
                <div className="ribbon absolute z-10 w-[150px] h-[150px] top-0 right-0 overflow-hidden">
                    <span className="absolute w-[225px] top-[--fluid-ribbon-top] -left-[--fluid-ribbon-left] py-s-fl-3xs text-center text-t-fl-xs text-neutral-700 bg-custom-300 rotate-45">
                        - Projet de formation -
                    </span>
                </div>
            )}
            <div
                className={`relative aspect-[16/9] rounded-t-s-fl-s bg-neutral-600 ${preload === "none" ? "bg-cover" : ""} overflow-hidden`}
                style={coverVideos.coverVideoOriginalUrl && preload === "none" ? { backgroundImage: `url(${coverBlur})` } : null}
            >
                {coverVideos.coverVideoOriginalUrl ? (
                    <>
                        <video
                            onClick={actionOnClick}
                            muted
                            playsInline // Necessary for iPhone if "autoplay" is true for it to work and for the video not to be played in fullscreen
                            poster={preload === "none" ? coverBlur : ""}
                            preload={preload}
                            className={`absolute w-full h-full object-cover object-top ${preload === "none" ? "blur-md" : ""}`}
                        >
                            {/* #t=0.001 à la fin de l'url des vidéos → Trick to get the first frame to show on iOS no poster is set, see: https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/ */}
                            {coverVideos.coverVideoW400Url && sectionInView && (
                                <source
                                    src={`${coverVideos.coverVideoW400Url}${preload === "auto" ? "#t=0.001" : ""}`}
                                    media="all and (max-width: 436px)"
                                ></source>
                            )}
                            {coverVideos.coverVideoW600Url && sectionInView && (
                                <source
                                    src={`${coverVideos.coverVideoW600Url}${preload === "auto" ? "#t=0.001" : ""}`}
                                    media="all and (max-width: 683px)"
                                ></source>
                            )}
                            {coverVideos.coverVideoW800Url && sectionInView && (
                                <source
                                    src={`${coverVideos.coverVideoW800Url}${preload === "auto" ? "#t=0.001" : ""}`}
                                    media="all and (max-width: 958px)"
                                ></source>
                            )}
                            {coverVideos.coverVideoW1000Url && sectionInView && (
                                <source
                                    src={`${coverVideos.coverVideoW1000Url}${preload === "auto" ? "#t=0.001" : ""}`}
                                    media="all and (max-width: 1345px)"
                                ></source>
                            )}
                            {coverVideos.coverVideoW1200Url && sectionInView && (
                                <source
                                    src={`${coverVideos.coverVideoW1200Url}${preload === "auto" ? "#t=0.001" : ""}`}
                                    media="all and (max-width: 1720px)"
                                ></source>
                            )}
                            {sectionInView && (
                                <source src={`${coverVideos.coverVideoOriginalUrl}${preload === "auto" ? "#t=0.001" : ""}`}></source>
                            )}
                            Votre navigateur ne prend pas en charge les vidéos
                        </video>
                        <PlayButton
                            actionOnClick={actionOnClick}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-600"
                            width="3em"
                            height="3em"
                        />
                    </>
                ) : (
                    <Image
                        src={coverUrl}
                        alt={name}
                        placeholder="blur"
                        blurDataURL={coverBlur}
                        sizes="(max-width: 436px) 400px, (max-width: 683px) 600px, (max-width: 958px) 800px, (max-width: 1345px) 1000px, (max-width: 1720px) 1200px, 1460px"
                        fill
                        className="w-full h-full object-cover object-top"
                    />
                )}
            </div>
            <div className="rounded-b-s-fl-s flex flex-col gap-s-fl-2xs-xs color-transition text-neutral-50 bg-gradient-to-t from-white/0 to-white/20 bg-custom-700 dark:bg-neutral-700 p-s-fl-2xs-xs">
                <div className="flex items-center gap-s-fl-l">
                    <h3 className="flex-grow font-paytoneOne">{name}</h3>
                    <div className="flex items-center gap-s-fl-l text-t-fl-l">
                        {github && (
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le code sur Github"
                                className="hover:shadow-md"
                            >
                                <motion.div
                                    tabIndex="-1"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <BaseIcon width="1em" height="1em" viewBox="0 0 496 512">
                                        <IconGithubProjectCard />
                                    </BaseIcon>
                                </motion.div>
                            </Link>
                        )}
                        {figma && (
                            <Link
                                href={figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir la maquette sur Figma"
                                className="hover:shadow-md"
                            >
                                <motion.div
                                    tabIndex="-1"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <BaseIcon width="1em" height="1em" viewBox="0 0 384 512">
                                        <IconFigma />
                                    </BaseIcon>
                                </motion.div>
                            </Link>
                        )}
                        {livePreview && (
                            <Link
                                href={livePreview}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir le site"
                                className="hover:shadow-md"
                            >
                                <motion.div
                                    tabIndex="-1"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <BaseIcon width="0.9em" height="0.9em" viewBox="0 0 512 512">
                                        <IconArrowOutFromSquare />
                                    </BaseIcon>
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
