import Link from "next/link"
import dynamic from "next/dynamic"
import "./Styles/hero.css"

const DynamicAnimation = dynamic(() => import("./Components/Animation"), { ssr: false })

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-custom-400 to-custom-300">
            <div className="u-container flex min-h-screen flex-col items-stretch justify-between">
                <div></div>
                <div className="u-grid grid-cols-2">
                    <div className="flex flex-col justify-center gap-s-fl-xl">
                        <p className="origin-top-left -rotate-6 font-gloriaHallelujah text-t-fl-l">👋 Hello, moi c’est Thibaut</p>
                        <p className="font-paytoneOne text-t-fl-3xl">Développeur web front-end</p>
                        <p>
                            J’adore &lt;coder /&gt; des sites modernes, dynamiques et{" "}
                            <Link href="https://utopia.fyi/">fluid responsive !</Link>
                        </p>
                    </div>
                    <DynamicAnimation />
                </div>
                <div className="flex justify-center">
                    <div class="animated-mouse">
                        <div class="animated-mouse-pointer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
