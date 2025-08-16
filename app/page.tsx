import Image from "next/image";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero";
import Footer from "./components/footer";
import WhatsappIcon from "./components/WhatsappIcon";
import About from "./components/about";
import Contact from "./components/contact";
import Testimonials from "./components/testimonials";
import WhatWeHave from "./components/what";
import PricingPlans from "./components/price";
import CallToActionBanner from "./components/cta";
import Gallery from "./components/Gallery";
export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <WhatWeHave/>
      <PricingPlans/>
      <Testimonials/>
      <Contact/>
      <Gallery preview={true} />
      <CallToActionBanner/>
      <Footer/>
      <WhatsappIcon/>
    </div>
  );
}
