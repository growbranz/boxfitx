import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Contacts from '../components/contact'
import Timetable from '../components/TimeTable'
import WhatsappIcon from '../components/WhatsappIcon'
import CallToActionBanner from '../components/cta'
import FAQ from '../components/FAQ'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <Contacts/>
      <Timetable/>
      <FAQ/>  
      <CallToActionBanner/>
      <WhatsappIcon/>
      <Footer/>
    </div>
  )
}

export default Contact
