import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import Image from "next/image";

import Hero from "./hero";
import ChooseUs from "./choose-us";
import HowItWorks from "./how-it-works";
import Benefits from "./benefits";
import Testimonial from "./testimonial";
import PlayDownload from "./play-download";
import "../styles/page.css";


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
      <HowItWorks />
      <Benefits />
      <Testimonial />
      <PlayDownload />
    </main>
  );
}

