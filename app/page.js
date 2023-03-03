import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import Image from "next/image";

import Hero from "./hero";
import ChooseUs from "./choose-us";
import HowItWorks from "./how-it-works";
import "../styles/page.css";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const euclidCircular = localFont({
  family: "Euclid Circular",
  style: "normal",
  src: [
    {
      path: '../public/asserts/fonts/euclid-circular/Euclid CircularA-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/asserts/fonts/euclid-circular/EuclidCircularA-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/asserts/fonts/euclid-circular/Euclid CircularA-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/asserts/fonts/euclid-circular/Euclid CircularA-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/asserts/fonts/euclid-circular/Euclid Circular A Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function Home() {
  
  return (
    <main className={poppins.className}>
      <Hero />
      <ChooseUs />
      <HowItWorks />
    </main>
  );
}

