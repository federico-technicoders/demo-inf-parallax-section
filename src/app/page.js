import { ExampleUno } from "@/components/ExampleUno";
import TestimonialsMarquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <TestimonialsMarquee />
            <TestimonialsMarquee isReversed className="mt-8" />
        </div>
    )
}
