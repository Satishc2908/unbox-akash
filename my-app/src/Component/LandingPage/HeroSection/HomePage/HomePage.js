import React from "react";
import Navbar from "../Navbar/Navbar";
import Navcontent from "../Navcontent/Navcontent";
import GiftingExperience from "../../GiftingExperience/GiftingExperience";
import PlentyOptions from "../../PlentyOptions/PlentyOptions";
import WhyChoose from "../../WhyChoose/WhyChoose";
import Custamizable from "../../Custamizable/Custamizable";
import Memorable from "../../Memorable/Memorable";
import Footer from "../../Footer/Footer";
import Hero from "../Hero";
// import GiftingExperience from '../LandingPage/GiftingExperience/GiftingExperience';

const HomePage = () => {
  return (
    <div>

      <Navcontent />
      <GiftingExperience />
      <PlentyOptions />
      {/* <WhyChoose /> */}
      <Custamizable />
      <Memorable />
      <Footer />

    </div>
  )
}
export default HomePage;
