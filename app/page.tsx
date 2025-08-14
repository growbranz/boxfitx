import Image from "next/image";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero";
import Footer from "./components/footer";
import WhatsappIcon from "./components/WhatsappIcon";
export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Footer/>
      <WhatsappIcon/>
    </div>
  );
}
