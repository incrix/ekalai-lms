"use client";
import euclidCircular from "../util/font-family";
import Image from "next/image";
import Slider from "react-slick";
import useWindowSize from "../util/screen-size";
import avatar from "../util/avatar";
import Quote from "../public/asserts/svgs/quote.svg";

import "../styles/testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const size = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size.width > 1260 ? 3 : size.width > 900 ? 2 : 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      image: avatar.male.atlas,
      fullName: "John Doe",
      position: "CEO, ABC Company",
      cont: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    },
    {
      image: avatar.male.orion,
      fullName: "John Doe",
      position: "CEO, ABC Company",
      cont: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    },
    {
      image: avatar.female.ava,
      fullName: "John Doe",
      position: "CEO, ABC Company",
      cont: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    },
    {
      image: avatar.female.luna,
      fullName: "John Doe",
      position: "CEO, ABC Company",
      cont: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
    },
  ];
  return (
    <section className="testimonial">
      <div className="testimonial-title">
        <h2>Testimonials</h2>
        <p className={euclidCircular.className}>
          See What Our Users Have To Say
        </p>
      </div>
      <div className="testimonial-cont">
        <Slider {...settings}
        >
          {data.map((data, index) => {
            return (
              <div key={index}>
                {card(data.image, data.fullName, data.position, data.cont)}
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

const card = (image, fullName, position, cont) => {
    const size = useWindowSize();
  return (
    <div className="test-card">
      <div className="test-card-title">
        <div className="test-title-cont">
          <Image src={image} alt="avatar" width={50} priority />
          <div className="test-head">
            <h4 className={euclidCircular.className}>{fullName}</h4>
            <p className={euclidCircular.className}>{position}</p>
          </div>
        </div>
        <Image src={Quote} alt="avatar" width={30} priority />
      </div>
      <div className="test-card-cont">
        <p className={euclidCircular.className}>{cont}</p>
      </div>
    </div>
  );
};
