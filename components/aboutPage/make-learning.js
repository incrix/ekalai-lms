"use client";
import Image from "next/image";
import Study from "../../public/asserts/images/study.png";
import Expert from "../../public/asserts/svgs/expert.svg";
import Lifetime from "../../public/asserts/svgs/lifetime.svg";
import Updated from "../../public/asserts/svgs/updated.svg";
import Weekly from "../../public/asserts/svgs/weekly.svg";
import useWindowSize from "@/util/screen-size";

export default function makeLearning() {
  const size = useWindowSize();
  return (
    <section className="make-learning">
      <h2>Making Your Learning More Enjoyable</h2>
      <div className="make-learning-content">
        <div className="make-learning-text">
          <div className="make-learning-card">
            <Image src={Expert} alt="" />
            <h3>Expert Instructors</h3>
            <p>
              Our instructors are experts in their fields, and they’re
              passionate about teaching.
            </p>
          </div>
            <div className="make-learning-card">
            <Image src={Lifetime} alt="" />
            <h3>Lifetime Access</h3>
            <p>
                Learn on your schedule. Study and review course materials
                on your own time.
            </p>
            </div>
            <div className="make-learning-card">
            <Image src={Updated} alt="" />
            <h3>Updated Material</h3>
            <p>
                Our content is updated regularly to keep pace with the
                latest industry trends.
            </p>
            </div>
            <div className="make-learning-card">
            <Image src={Weekly} alt="" />
            <h3>Weekly Event</h3>
            <p>
                Join live classes with your classmates and instructor
                to learn and practice together.
            </p>
            </div>
        </div>
        <div className="make-learning-img">
          <Image
            src={Study}
            alt="Make Learning Fun"
            width={size.width > 1023 ? 400 : size.width * 0.8}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
