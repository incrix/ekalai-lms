import Hero from "@/components/aboutPage/hero";
import MakeLearning from "@/components/aboutPage/make-learning";
import euclidCircular from "@/util/font-family";
import Testimonial from "@/components/landingPage/testimonial";
import JoinPlatform from "@/components/aboutPage/join-platform";
import GetInTouch from "@/components/aboutPage/get-in-touch";

import "@/styles/about/page.css";

export default function About() {
  return (
    <main className={`about ${euclidCircular.className}`}>
      <Hero />
      <MakeLearning />
      <Testimonial />
      <JoinPlatform />
      <GetInTouch />
    </main>
  );
}