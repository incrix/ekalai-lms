import "../styles/globals.css";
import Header from '../components/header'
import Footer from "../components/footer";

export const metadata = {
  title: 'Ekalai | Keep learning',
  description: 'Ekalai is the leading e-learning  platform in India. We provide a wide range of courses for students and professionals. We also provide a platform for teachers to create and sell their courses online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
