"use client";
import Image from "next/image";
import Desk from "../public/asserts/images/desk.png";
import Mob from "../public/asserts/images/mob.png";
import Play from "../public/asserts/images/play.png";
import useWindowSize from "../util/screen-size";

import "../styles/play-download.css";

export default function playDownload() {

  const size = useWindowSize();

  return (
    <section className="play-download">
      <div className="play-image">
        <Image src={Mob} alt="Play Store" height={ size.width > 600 ? 200 : 130}  priority />
        <Image src={Desk} alt="App Store" height={ size.width > 600 ? 250 : 150}  priority />
      </div>
      <div className="play-cont">
        <h2>Learn From <font>Anywhere,<br /> Anytime!</font></h2>
        <p>Take classes on the go with the educrat app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
        <Image src={Play} alt="Download in play store" quality={100}/>
      </div>
    </section>
  );
}
