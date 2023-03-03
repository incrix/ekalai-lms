import Image from "next/image";
import Link from "next/link";
import logo from "../public/asserts/svgs/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src={logo} alt="Ekalai" height={50}/>
        <h1>Ekalai</h1>
      </div>
        <nav className="navbar">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Courses</Link>
                <Link href="#">Sign up</Link>
                <Link className="login-btn" href="#">Login</Link>
        </nav>
    </header>
  );
}
