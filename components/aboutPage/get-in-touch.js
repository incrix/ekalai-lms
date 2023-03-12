"use client";
import Image from "next/image";
import GetInTouch from "@/public/asserts/images/getintouch.png";
import LocationIcon from "@/public/asserts/svgs/location-icon.svg";
import MailIcon from "@/public/asserts/svgs/mail-icon.svg";
import PhoneIcon from "@/public/asserts/svgs/phone-icon.svg";
import useWindowSize from "@/util/screen-size";

export default function getInTouch() {
    const size = useWindowSize();
  return (
    <section className="get-in-touch">
      <h2>Get in touch</h2>
      <p>
            Ut eget mattis lacus, sit amet accumsan erat. Integer suscipit justo
            vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo
            magna, vel tincidunt magna laoreet eu.
          </p>
      <div className="get-in-touch-cont">
        <div className="get-in-touch-cont-left">
          <div className="get">
            <Image src={LocationIcon} />
            <div className="get-cont">
              <h3>Address</h3>
              <p>329 Queensberry Street, Coimbatore, India.</p>
            </div>
          </div>
          <div className="get">
            <Image src={MailIcon} />
            <div className="get-cont">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@ekalai.in ">info@ekalai.in</a>
              </p>
            </div>
          </div>
          <div className="get">
            <Image src={PhoneIcon} />
            <div className="get-cont">
              <h3>Phone</h3>
              <p>
                <a href="tel:+91 9789696987">+91 9789696987</a>
              </p>
            </div>
          </div>
        </div>
        <Image src={GetInTouch} alt="Get in Touch"  width={size.width > 948? "auto" : size.width * 0.8}/>
      </div>
    </section>
  );
}
