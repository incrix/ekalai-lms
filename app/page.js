import { Poppins } from "next/font/google";
import Hero from "../components/landingPage/hero";
import ChooseUs from "../components/landingPage/choose-us";
import PopularCourse from "../components/landingPage/course";
import HowItWorks from "../components/landingPage/how-it-works";
import Benefits from "../components/landingPage/benefits";
import Testimonial from "../components/landingPage/testimonial";
import PlayDownload from "../components/landingPage/play-download";
import "../styles/landingPage/page.css";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});


export default function Home() {
  
  return (
    <main className={poppins.className}>
      <Hero />
      <ChooseUs />
      <PopularCourse />
      <HowItWorks />
      <Benefits />
      <Testimonial />
      <PlayDownload />
    </main>
  );
}

