import ProfilePictureOnNameHover from "@/components/Presentation/ProfilePictureOnNameHover"
import { getCurrentAge } from "@/lib/utils"

export default function PresentationText() {
    const age = getCurrentAge()

    return (
        <>
            <span>Moi c'est </span>
            <ProfilePictureOnNameHover name="Thibaut" />
            <span>, {age} ans et originaire de Montpellier, </span>
            <span className="font-bold">ingénieur</span>
            <span> de formation, je suis </span>
            <span className="font-bold">développeur web</span>
            <span> fullstack spécialisé dans le </span>
            <span className="font-bold">front-end</span>.
            <br />
            <br />
            <span>Passionné d'</span>
            <span className="font-bold">escalade</span>
            <span>, de </span>
            <span className="font-bold">musique</span>
            <span>, de </span>
            <span className="font-bold">voyages</span>
            <span>, de </span>
            <span className="font-bold">vans aménagés</span>
            <span> et de </span>
            <span className="font-bold">bricolage</span>
            <span>, j'ai aussi une </span>
            <span className="font-bold">grande passion pour l'informatique et les nouvelles technologies</span>
            <span>.</span>
            <br />
            <br />
            <span>Depuis l'assemblage de mon 1er PC à 15 ans, cette </span>
            <span className="font-bold">passion</span>
            <span> n'a fait que croître.</span>
            <br />
            <br />
            <span className="font-bold">Autodidacte</span>
            <span>, j'avais depuis longtemps des bases solides en HTML/CSS/JS, que j'ai perfectionnées grâce à une </span>
            <span className="font-bold">formation certifiante</span>
            <span> que j'ai suivie et validée.</span>
            <br />
            <br />
            <span>Je maîtrise les </span>
            <span className="font-bold">dernières technologies et frameworks</span>
            <span> tels que React / Next.js.</span>
            <br />
            <br />
            <span>J'offre aujourd'hui toute mon </span>
            <span className="font-bold">expertise</span>
            <span> à mes clients, en garantissant </span>
            <span className="font-bold">écoute, rigueur, professionnalisme et flexibilité</span>
            <span>.</span>
            <br />
            <br />
            <span className="font-bold color-transition text-custom-600 dark:text-custom-300">
                Confiez-moi votre projet, et ensemble, assurons sa réussite{" "}
            </span>
            <div className="inline-block animate-bounce">🤝</div>
        </>
    )
}
