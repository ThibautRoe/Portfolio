import AnimatedText from "@/components/Header/AnimatedText"
import Navigation from "@/components/Header/Navigation"
import AnimatedButton from "@/components/AnimatedButton"
import BaseIcon from "@/components/Icons/BaseIcon"
import IconMail from "@/components/Icons/src/AnimatedOnRender/IconMail"

export default function Header({ activeSectionId }) {
    return (
        <header
            id="home"
            className="nav-anchor color-transition lg:bg-custom-400 dark:lg:bg-neutral-800 text-neutral-600 dark:text-neutral-400 lg:text-neutral-600 dark:lg:text-neutral-50 snap-start h-[1px] lg:h-auto"
        >
            {/* 1px height plutôt que hidden sur mobile sinon le snap-start n'est pas pris en compte donc on le peut plus scroller sur cette section et le #home hash link ne fonctionne plus  */}
            <div className="lg:u-container">
                <div className="flex">
                    <AnimatedText once text="<Thibaut />" el="p" className="hidden lg:inline text-t-fl-2xl" />
                    <Navigation header={true} activeSectionId={activeSectionId} />
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
