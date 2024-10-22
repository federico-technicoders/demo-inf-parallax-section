import { ExampleUno } from "@/components/ExampleUno";
import TestimonialsMarquee from "@/components/Marquee";
import Image from "next/image";

import gsapIcon from '@/assets/technologyIcons/gsap.svg'
import nextIcon from '@/assets/technologyIcons/next.svg'
import openGLIcon from '@/assets/technologyIcons/opengl.svg'
import reactIcon from '@/assets/technologyIcons/react.svg'
import tailwindIcon from '@/assets/technologyIcons/tailwind.svg'
import threeIcon from '@/assets/technologyIcons/three.svg'
import typescriptIcon from '@/assets/technologyIcons/typescript.svg'

const ICONS = [gsapIcon, nextIcon, openGLIcon, reactIcon, tailwindIcon, threeIcon, typescriptIcon]

const elements = [...ICONS, ...ICONS]

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <TestimonialsMarquee ELEMENTS={elements} />
            <TestimonialsMarquee ELEMENTS={elements} isReversed className="mt-8" />
        </div>
    )
}
