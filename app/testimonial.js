"use client";
import euclidCircular from "../util/font-family";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../util/avatar";

import "../styles/testimonial.css";
import "swiper/css";

export default function Testimonial() {

    const data = [
        {
            image: avatar,
            fullName: "John Doe",
            position: "CEO, ABC Company",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nunc nisl sit amet lorem. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nunc nisl sit amet lorem."
        },
    ]
  return (
    <section className="testimonial">
      <div className="testimonial-title">
        <h2>Testimonials</h2>
        <p className={euclidCircular.className}>
          See What Our Users Have To Say
        </p>
      </div>
      <div className="testimonial-cont">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

const card = (image, fullName, position, cont)=>{
    return (
        <div className="card">
            <div className="card-title">
                <Image src={image} alt="avatar" priority />
                <div>
                    <h4 className={euclidCircular.className}>{fullName}</h4>
                    <p className={euclidCircular.className}>{position}</p>
                </div>
            </div>
            <div className="card-cont">
                <p className={euclidCircular.className}>
                    {cont}
                </p>
            </div>
        </div>
    );
}