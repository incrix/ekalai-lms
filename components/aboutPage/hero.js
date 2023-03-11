"use client";
import Image from "next/image";
import AboutHero from "../../public/asserts/images/about-hero.png";
import useWindowSize from "../../util/screen-size";

export default function Hero() {
  const size = useWindowSize();
  return (
    <section className="about-hero">
      <div className="column-1">
        <h1>This is Our Story </h1>
        <p>
          Ut eget mattis lacus, sit amet accumsan erat. Integer suscipit justo
          vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna,
          vel tincidunt magna laoreet eu.
        </p>
        <div className="vision-mission">
          <div className="vision">
            <h3>Vision</h3>
            <p>
              Ut eget mattis lacus, sit amet accumsan erat. Integer suscipit
              justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas
              leo magna, vel tincidunt magna laoreet eu.
            </p>
          </div>
          <div className="mission">
            <h3>Mission</h3>
            <p>
              Ut eget mattis lacus, sit amet accumsan erat. Integer suscipit
              justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas
              leo magna, vel tincidunt magna laoreet eu.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={AboutHero}
        alt="Boy happy studying with tab"
        sizes="(max-width: 768px) 100vw"
        width={size.width * 0.3}
        loading="lazy"
      />
    </section>
  );
}
