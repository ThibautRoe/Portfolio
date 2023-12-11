"use client"

import { Carousel } from "@mantine/carousel"
import ProjectCard from "./ProjectCard/ProjectCard"
import classes from "./Projects.module.css"

export default function Projects({ projects }) {
    return (
        <div id="projects" className="">
            <p>Réalisations</p>
            <Carousel slideSize="70%" height={200} slideGap="md" withIndicators classNames={classes}>
                {projects.map((item) => (
                    <Carousel.Slide key={`slide-${item.sys.id}`}>
                        <ProjectCard
                            training={item.fields.training}
                            name={item.fields.name}
                            cover={item.fields.cover}
                            coverBlur={item.fields.coverW10Base64Encoded}
                            activity={item.fields.activity}
                            description={item.fields.description}
                            techStack={item.fields.techStack}
                            github={item.fields.github}
                            livePreview={item.fields.livePreview}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}
