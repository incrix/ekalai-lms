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
          Ekalai is an e-learning platform that offers a unique and engaging
          approach to education. Founded by a team of educators and
          technologists, Ekalai focuses on sharing personal and cultural stories
          from around the world. The platform offers a wide range of courses and
          interactive features such as quizzes and discussion boards. Its
          mission is to provide learners with a personalized and dynamic
          learning experience while promoting understanding and empathy between
          different cultures. Ekalai's name is derived from the Tamil word
          "Ekalaivan," which means "one who is self-taught."
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
      {size.width > 1023 ? <Image
        src={AboutHero}
        alt="Boy happy studying with tab"
        sizes="(max-width: 768px) 100vw"
        width={size.width * 0.3}
        loading="lazy"
      /> : null}
    </section>
  );
}
