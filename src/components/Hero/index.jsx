import Link from "next/link"
import dynamic from "next/dynamic"
import "./Styles/hero.css"

const DynamicAnimation = dynamic(() => import("./Components/Animation"), { ssr: false })

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-custom-400 to-custom-300">
            <div className="u-container flex min-h-screen flex-col">
                <div className="lg:u-grid lg:grid-cols-2 grid grid-rows-2 lg:grid-rows-none flex-grow">
                    <div className="flex flex-col justify-center gap-s-fl-xl flex-grow">
                        <p className="origin-top-left -rotate-6 font-gloriaHallelujah text-t-fl-l">👋 Hello, moi c’est Thibaut</p>
                        <h1 className="font-paytoneOne text-t-fl-3xl">Développeur web front-end</h1>
                        <p>
                            J’adore &lt;coder /&gt; des sites modernes, dynamiques et{" "}
                            <Link href="https://utopia.fyi/">fluid responsive !</Link>
                        </p>
                    </div>
                    <DynamicAnimation />
                </div>
                <div className="hidden sm:flex justify-center">
                    <div className="animated-mouse">
                        <div className="animated-mouse-pointer"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
