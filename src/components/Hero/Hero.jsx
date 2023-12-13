import dynamic from "next/dynamic"

const DynamicAnimatiopn = dynamic(() => import("./Components/Animation"), { ssr: false })

export default function Hero() {
    return (
        <div className="flex justify-between gap-96">
            <p>
                {`Salut!  Moi c'est Thibaut, développeur web fullstack spécialisé dans le frontend.
                Depuis l'assemblage de mon 1er PC à 15 ans, ma passion pour l'informatique n'a fait que croître.`}
                <br />
                <br />
                {`Autodidacte, j'ai bâti des bases solides en HTML/CSS/JS, que j'ai récemment perfectionnées grâce à une formation certifiante.
                Je maîtrise maintenant les dernières technologies et frameworks tels que React / Next.js.`}
                <br />
                <br />
                {`J'offre aujourd'hui toute mon expertise à mes clients, en garantissant écoute, rigueur, professionnalisme et flexibilité. Confiez-moi votre projet, et ensemble, assurons sa réussite.`}
            </p>
            <DynamicAnimatiopn />
        </div>
    )
}
