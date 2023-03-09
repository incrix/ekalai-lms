"use client";
import Image from "next/image";
import Bg from "../../public/asserts/images/hero-bg.png";
import Hero from "../../public/asserts/images/hero.png";
import useWindowSize from "../../util/screen-size";
import SearchBar from "./search-bar";

export default function hero() {
    const size = useWindowSize();
    return(
        <section className="hero">
        <Image src={Bg} alt="bg" className="hero-bg" priority />
        <div className="hero-content">
          <p>Learn with us and</p>
          <h1>
            Enrich your skills, <br /> Anytime, Anywhere!
          </h1>
          <p>Own your future learning new skills online</p>
          <SearchBar />
        </div>
        {size.width > 1024 ?<Image src={Hero} alt="Girl with book"  height={size.width > 1124 ? size.height*0.80 - 80: size.height*0.70 - 80}/> : null}
      </section>
    );
}