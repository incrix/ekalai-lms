import Browse from "../public/asserts/svgs/browse.svg";
import Purchase from "../public/asserts/svgs/purchase.svg";
import Learn from "../public/asserts/svgs/learn.svg";
import Arrow1 from "../public/asserts/svgs/arrow-1.svg";
import Arrow2 from "../public/asserts/svgs/arrow-2.svg";
import CurvelineIcone from "../public/asserts/svgs/curveline-icon.svg";
import "../styles/how-it-works.css";
import Image from "next/image";
import ScreenSize from "../util/screen-size";

export default function HowItWorks() {
  return (
    <div className="how-it-work">
      <div className="title">
        <h2>How It Works</h2>
        <Image src={CurvelineIcone} alt="curveline" />
      </div>

      <ul className="content-list">
        <li>
          <Image src={Browse} alt="" priority />
          <p>Browse courses from our expert contributors.</p>
        </li>
        <li>
          <Image
            src={Arrow1}
            alt=""
            priority
            height={ScreenSize.width > 1023 ? auto : 141}
            width={ScreenSize.width > 1023 ? auto : 141}
          />
        </li>
        <li>
          <Image src={Purchase} alt="" priority />
          <p>Purchase quickly and securely.</p>
        </li>
        <li>
          <Image
            src={Arrow2}
            alt=""
            priority
            height={ScreenSize.width > 1023 ? auto : 141}
            width={ScreenSize.width > 1023 ? auto : 141}
          />
        </li>
        <li>
          <Image src={Learn} alt="" priority />
          <p>That’s it! Start learning right away.</p>
        </li>
      </ul>
    </div>
  );
}
