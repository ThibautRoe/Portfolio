import Link from "next/link"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconHome from "@/components/Icons/src/Animated/IconHome"
import IconPerson from "@/components/Icons/src/Animated/IconPerson"
import IconCode from "@/components/Icons/src/Animated/IconCode"
import IconGithubNavBar from "@/components/Icons/src/Animated/IconGithubNavBar"
import IconMail from "@/components/Icons/src/Animated/IconMail"

const navItems = [
    { id: "home", text: "Accueil", icon: <IconHome />, mobileOnly: true },
    { id: "about", text: "Présentation", icon: <IconPerson />, mobileOnly: false },
    { id: "skills", text: "Compétences", icon: <IconCode />, mobileOnly: false },
    { id: "projects", text: "Réalisations", icon: <IconGithubNavBar />, mobileOnly: false },
    { id: "contact", text: "Contact", icon: <IconMail />, mobileOnly: true },
]

export default function Navigation({ activeSectionId }) {
    return (
        <nav className="fixed lg:static bottom-0 lg:bottom-auto z-40 lg:z-auto w-full lg:w-auto text-t-fl-xs lg:text-t-fl-base lg:font-bold border-t-[1px] lg:border-0 color-transition border-t-neutral-300/70 dark:border-t-neutral-800/90 bg-neutral-100/80 dark:bg-neutral-700/95 lg:bg-custom-400 dark:lg:bg-neutral-800 flex flex-grow justify-center">
            <ul className="flex flex-grow items-center max-w-[600px] lg:max-w-full lg:justify-end lg:gap-s-fl-m-l">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`flex-grow lg:flex-grow-0 ${
                            activeSectionId === item.id ? "color-transition bg-custom-200/80 dark:bg-neutral-600/95" : ""
                        }`}
                    >
                        <Link
                            href={`#${item.id}`}
                            className={`flex flex-col items-center gap-y-s-fl-3xs p-s-fl-2xs ${item.mobileOnly ? "lg:hidden" : ""}`}
                        >
                            <BaseIcon
                                className={`lg:hidden ${
                                    activeSectionId === item.id
                                        ? "text-neutral-800 dark:text-neutral-100"
                                        : "text-neutral-600 dark:text-neutral-400"
                                } lg:text-neutral-50 dark:lg:text-neutral-50`}
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 24 24"
                            >
                                {item.icon}
                            </BaseIcon>
                            <span
                                className={`${
                                    activeSectionId === item.id
                                        ? "color-transition text-neutral-800 dark:text-neutral-100"
                                        : "color-transition text-neutral-600 dark:text-neutral-400"
                                } lg:text-neutral-50 dark:lg:text-neutral-50 ${
                                    item.mobileOnly
                                        ? ""
                                        : "wavy-underline relative after:absolute after:left-0 after:-bottom-[0.2em] after:w-full after:h-[0.25em] after:bg-[length:100%_100%] after:opacity-0 hover:after:opacity-100 lg:after:transition-opacity lg:after:duration-500"
                                }`}
                            >
                                {item.text}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
