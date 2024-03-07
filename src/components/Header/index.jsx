import AnimatedText from "@/components/header/animated-text"
import Navigation from "@/components/navigation"
import AnimatedButton from "@/components/ui/animated-button"
import BaseIcon from "@/components/ui/icons/base-icon"
import IconMail from "@/components/ui/icons/src/animated-on-render/icon-mail"

export default function Header() {
    return (
        <header
            id="home"
            className="nav-anchor color-transition lg:bg-custom-400 dark:lg:bg-neutral-800 text-neutral-600 dark:text-neutral-400 lg:text-neutral-600 dark:lg:text-neutral-50 snap-start h-[1px] lg:h-auto"
        >
            {/* 1px height plutôt que hidden sur mobile sinon le snap-start n'est pas pris en compte donc on le peut plus scroller sur cette section et le #home hash link ne fonctionne plus  */}
            <div className="lg:u-container">
                <div className="flex">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden lg:inline text-t-fl-2xl" />
                    <Navigation header={true} />
                    <AnimatedButton
                        link="mailto:hello@thibautroegiers.dev"
                        linkClass="hidden lg:flex"
                        text="Contactez-moi"
                        iconBefore={
                            <BaseIcon width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                <IconMail />
                            </BaseIcon>
                        }
                    />
                </div>
            </div>
        </header>
    )
}
