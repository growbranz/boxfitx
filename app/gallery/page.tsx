import React from "react";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";

const GalleryPage = () => {
  return (
    <div>
      <NavBar />
      <Gallery preview={false} />
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default GalleryPage;
