import Image from "next/image";
import Elearning from "../../public/asserts/svgs/elearning.svg";
import CurvelineIcone from "../../public/asserts/svgs/curveline-icon.svg";

import "../../styles/landingPage/benefits.css";

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="title">
        <h2>
          Benefits of <font>E-Learning</font>
        </h2>
        <Image src={CurvelineIcone} alt="curveline" />
      </div>

      <div className="benefits-cont">
        <div className="cont-1">
          <div className="cont-1-item">
            <h3>Flexible</h3>
            <p>
              When you enroll for online classes, you will be able to study and
              review course materials during your own time.
            </p>
          </div>
          <div className="cont-1-item">
            <h3>Documentation</h3>
            <p>
              When you enroll for online classes, you will be able to study and
              review course materials during your own time.
            </p>
          </div>
          <div className="cont-1-item">
            <h3>Increased Time</h3>
            <p>
              Effective time management not only helps with your learning but
              can also make you more productive at work and in your personal
              life
            </p>
          </div>
        </div>

        <Image src={Elearning} alt="e learning" priority width={330} />

        <div className="cont-2">
          <div className="cont-2-item">
            <h3>Reduced Costs</h3>
            <p>
              The price reduction is the result of educational institutions
              saving a lot of money on transportation and accommodation of both
              students and teachers.
            </p>
          </div>
          <div className="cont-2-item">
            <h3>Access to Expertise</h3>
            <p>
              Online learning enables teachers to teach their lessons in a
              consistent way with a higher level of coverage ensuring all
              students receive the same amount of knowledge.
            </p>
          </div>
          <div className="cont-2-item">
            <h3>Networking Opportunities</h3>
            <p>
              When you enroll for online classes, you will be able to study and
              review course materials during your own time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
