import Hero from "../../components/aboutPage/hero";
import MakeLearning from "../../components/aboutPage/make-learning";
import euclidCircular from "@/util/font-family";

import "../../styles/about/page.css";

export default function About() {
  return (
    <main className={`about ${euclidCircular.className}`}>
      <Hero />
      <MakeLearning />
    </main>
  );
}