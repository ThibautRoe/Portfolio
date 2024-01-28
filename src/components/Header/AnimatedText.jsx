"use client"

import { useRef, useEffect, useState, createElement } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const defaultAnimations = {
    hidden: {
        opacity: 0,
        x: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
    visibleCaret: {
        opacity: 1,
        x: 0,
        y: -3,
        transition: {
            duration: 0.1,
        },
    },
    pulsateCaret: {
        opacity: [1, 0, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
        },
    },
}

export default function AnimatedText(props) {
    const { once, text, el, animation, className, repeatDelay } = props
    const textArray = Array.isArray(text) ? text : [text]
    const wrapper = el || "p"
    const animations = animation || defaultAnimations
    const controls = useAnimation()
    const controlsCaret = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once })
    const [startPulsatingCaret, setStartPulsatingCaret] = useState(false)

    useEffect(() => {
        let timeout
        function show() {
            controls.start("visible")
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden")
                    controls.start("visible")
                }, repeatDelay)
            }
        }

        if (isInView) {
            show()
        } else {
            controls.start("hidden")
            controlsCaret.start("hidden")
        }

        return () => clearTimeout(timeout)
    }, [isInView])

    useEffect(() => {
        let timeout
        function show() {
            timeout = setTimeout(async () => {
                await controlsCaret.start("visibleCaret")
                controlsCaret.start("pulsateCaret")
            }, 1100)
        }

        if (startPulsatingCaret) {
            show()
        } else {
            controlsCaret.start("hidden")
        }

        return () => clearTimeout(timeout)
    }, [startPulsatingCaret])

    return (
        <>
            {createElement(
                wrapper,
                { className: className },
                <>
                    <span className="sr-only">{textArray.join(" ")}</span>
                    <motion.span
                        ref={ref}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {},
                        }}
                        initial="hidden"
                        animate={controls}
                        onAnimationComplete={() => {
                            setStartPulsatingCaret(true)
                        }}
                        aria-hidden
                        className="inline-block"
                    >
                        {textArray.map((line, lineIndex) => (
                            <span className="block" key={`${line}-${lineIndex}`}>
                                {line.split(" ").map((word, wordIndex) => (
                                    <span className="inline-block" key={`${word}-${wordIndex}`}>
                                        {word.split("").map((char, charIndex) => (
                                            <motion.span key={`${char}-${charIndex}`} variants={animations} className="inline-block">
                                                {char}
                                            </motion.span>
                                        ))}
                                        <span className="inline-block">&nbsp;</span>
                                    </span>
                                ))}
                            </span>
                        ))}
                    </motion.span>
                    <motion.span variants={animations} initial="hidden" animate={controlsCaret} aria-hidden className="inline-block">
                        |
                    </motion.span>
                </>
            )}
        </>
    )
}
