import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    return (
        <section className="bg-neutral-100" id="contact">
            <div className="u-container flex min-h-screen items-center justify-center text-t-fl-xl text-custom-600">
                <div className="relative flex aspect-square flex-col items-center justify-center gap-s-fl-2xl rounded-full border-2 border-custom-600 px-s-fl-2xl-3xl">
                    <FontAwesomeIcon icon={faHandshake} className="absolute -top-5" />{" "}
                    {/* TODO Vertical align no good depending on screen size */}
                    <p className="font-paytoneOne text-t-fl-2xl text-custom-400">Echangeons !</p>
                    <Link
                        href="mailto:hello@thibautroegiers.dev"
                        className="active:bg-custom-800 transform-gpu rounded-full bg-custom-600 drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-custom-700 hover:drop-shadow-lg"
                    >
                        <button className="relative flex items-center gap-s-fl-s px-s-fl-l py-s-fl-2xs font-bold text-neutral-50">
                            <span className="absolute -left-s-fl-xs -top-s-fl-xs px-s-fl-xs py-s-fl-3xs text-t-fl-xs text-custom-700 after:absolute after:inset-0 after:-z-10 after:skew-x-[-30deg] after:bg-custom-300">
                                OUVERT À DE NOUVEAUX PROJETS
                            </span>
                            <span>CONTACT</span>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
