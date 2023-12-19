"use client"

import SkillCard from "./SkillCard"
// import "../Styles/SkillsSlideshow.css"
import { register } from "swiper/element/bundle"
register()

export default function SkillsSlideshow({ skills }) {
    return (
        <swiper-container
            class="w-1/2 h-1/2"
            // class="max-w-full"
            // enabled="false"
            a11y="true"
            grab-cursor="true"
            initial-slide="1"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            // slides-per-view="3"
        >
            <swiper-slide>
                <div className="flex flex-col items-center px-s-fl-l">
                    <p className="text-t-fl-l">Backend</p>
                    <div className="flex flex-grow items-center">
                        <div className="flex flex-wrap justify-center gap-s-fl-xl">
                            {skills.backend.map((item) => (
                                <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="flex flex-col items-center px-s-fl-l">
                    <p className="text-t-fl-l">Frontend</p>
                    <div className="flex flex-grow items-center">
                        <div className="flex flex-wrap justify-center gap-s-fl-xl">
                            {skills.frontend.map((item) => (
                                <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="flex flex-col items-center px-s-fl-l">
                    <p className="text-t-fl-l">Autre</p>
                    <div className="flex flex-grow items-center">
                        <div className="flex flex-wrap justify-center gap-s-fl-xl">
                            {skills.other.map((item) => (
                                <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    )
}
