import Image from "next/image";
import BulbIcon from "../../public/asserts/svgs/bulb-icon.svg";
import HatIcon from "../../public/asserts/svgs/hat-icon.svg";
import IdcardIcon from "../../public/asserts/svgs/idcard-icon.svg";
import PassIcon from "../../public/asserts/svgs/pass-icon.svg";
import CurvelineIcone from "../../public/asserts/svgs/curveline-icon.svg";
import "../../styles/choose-us.css";

export default function chooseUs() {
  const cards = [
    {
      image: BulbIcon,
      title: "Reach higher in your career",
      content:
        "Having a solid foundation of skills and knowledge with us will help you advance in your profession.",
    },
    {
      image: HatIcon,
      title: "Self learn",
      content:
        "With all of our tools and courses, you can study whenever you want, from anywhere.",
    },
    {
      image: IdcardIcon,
      title: "Enhance personal skills",
      content:
        "Provide learners with a broad variety of coding skills for use in teaching and coaching.",
    },
    {
      image: PassIcon,
      title: "Learn at your ease",
      content:
        "Easy access and streaming of any courses at any time with application support.",
    },
  ];
  return (
    <div className="choose-us">
      <div className="title">
        <h2>Why choose us?</h2>
        <Image src={CurvelineIcone} alt="curveline" />
      </div>
      <div className="choose-us-cont">
        {cards.map((cardData, index) => {
          return card(cardData, index);
        })}
      </div>
    </div>
  );
}

const card = ({ image, title, content }, index) => {
  return (
    <div className="card" key={index}>
      <Image src={image} alt="card" height={50} priority />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
