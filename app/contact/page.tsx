import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contacts from "../components/contact";
import Timetable from "../components/TimeTable";
import WhatsappIcon from "../components/WhatsappIcon";
import CallToActionBanner from "../components/Cta";
import FAQ from "../components/FAQ";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Contacts />
      <Timetable />
      <FAQ />
      <CallToActionBanner />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Contact;
