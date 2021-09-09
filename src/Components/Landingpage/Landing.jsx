import React from "react";
import About from "../About/About";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Onepage from "../Onepage/Onepage";
import Pricing from "../Pricing/Pricing";
import Services from "../Servicepage/Services";
import Videopage from "../Videopage/Videopage";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Card />
      <About />
      <Videopage />
      <Services />
      <Pricing />
      <Onepage />
      <Footer />
    </>
  );
};

export default Landing;
