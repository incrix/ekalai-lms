import Image from "next/image";
import Link from "next/link";
import euclidCircular from "../util/font-family";
import Logo2 from "../public/asserts/svgs/logo-2.svg";
import TwitterIcon from "../public/asserts/svgs/twitter-icon.svg";
import FacebookIcon from "../public/asserts/svgs/facebook-icon.svg";
import InstagramIcon from "../public/asserts/svgs/instagram-icon.svg";
import LinkedinIcon from "../public/asserts/svgs/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
        <div className={`foot-head ${euclidCircular.className}`}>
            <Image src={Logo2}  alt="Logo"/>
            <span>Ekalai</span>
        </div>
        <div className={`foot-body ${euclidCircular.className}`}>
            <div className="foot-body-1">
                <h4 className={euclidCircular.className}>Contact</h4>
                <Link href="tel:+919789696987">+91 9789696987</Link>
                <Link href="mailto:info@ekalai.in">info@ekalai.in</Link>
                <p>329 Queensberry Street,<br /> Coimbatore,<br /> India.</p>
            </div>
            <div className="foot-body-2">
                <Link href="#">About Us</Link>
                <Link href="#">Courses</Link>
                <Link href="#">Support</Link>
            </div>
            <div className="foot-body-3">
                <Link href="#">Help</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of use</Link>
            </div>
            <div className="foot-body-4">
                <Link href="#"><Image src={TwitterIcon} alt="" priority/></Link>
                <Link href="#"><Image src={FacebookIcon} alt="" priority/></Link>
                <Link href="#"><Image src={InstagramIcon} alt="" priority/></Link>
                <Link href="#"><Image src={LinkedinIcon} alt="" priority/></Link>
            </div>
        </div>
        <div className={`foot-foot ${euclidCircular.className}`}>
            <p>© 2023 Ekalai. All rights reserved.</p>
            <p>Designed by <Link href="https://incrix.com">incrix</Link></p>
        </div>

    </footer>
  );
}