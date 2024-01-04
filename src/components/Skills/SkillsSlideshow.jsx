"use client"

import SkillCard from "./SkillCard"
// import "./SkillsSlideshow.css" //TODO à remettre
import { register } from "swiper/element/bundle"
register()

export default function SkillsSlideshow({ skills }) {
    return (
        <swiper-container
            class="w-full"
            a11y="true"
            breakpoints='{"768": {"slidesPerView": 2}, "1024": {"slidesPerView": 3, "grabCursor": true}}'
            grab-cursor="true"
            keyboard="true"
            long-swipes-ratio="0.25"
            mousewheel-force-to-axis="true"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            slides-per-view="1"
        >
            <swiper-slide class="flex flex-col items-center px-s-fl-l">
                <p className="text-t-fl-l">Front-end</p>
                <div className="flex flex-grow items-center">
                    <div className="flex flex-wrap justify-center gap-s-fl-xl">
                        {skills.frontend.map((item) => (
                            <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                        ))}
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex flex-col items-center px-s-fl-l md:ml-s-fl-xs lg:mx-s-fl-xs">
                <p className="text-t-fl-l">Back-end</p>
                <div className="flex flex-grow items-center">
                    <div className="flex flex-wrap justify-center gap-s-fl-xl">
                        {skills.backend.map((item) => (
                            <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                        ))}
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex flex-col items-center px-s-fl-l">
                <p className="text-t-fl-l">Autres</p>
                <div className="flex flex-grow items-center">
                    <div className="flex flex-wrap justify-center gap-s-fl-xl">
                        {skills.other.map((item) => (
                            <SkillCard key={item.sys.id} name={item.fields.name} icon={item.fields.icon} url={item.fields.url} />
                        ))}
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    )
}
