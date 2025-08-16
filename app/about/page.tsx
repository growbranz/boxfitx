import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/about';
import Footer from '../components/footer';
import WhatWeHave from "../components/what";
import Testimonials from '../components/testimonials';
import WhatsappIcon from '../components/WhatsappIcon';
import MissionVision from '../components/MissionVision';
import Timetable from '../components/TimeTable';
const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <About />
      <MissionVision/>
      <WhatWeHave/>
      <Testimonials/>
       <Timetable />
      <Footer/>
      <WhatsappIcon/>
    </div>
  );
};

export default AboutPage;
