import React from "react";
import Styles from '../LandingPage/Landing.module.scss';
import HeroSection from '../LandingPage/HeroSection/Hero';
import GiftingExperience from '../LandingPage/GiftingExperience/GiftingExperience';
import PlentyOptions from '../LandingPage/PlentyOptions/PlentyOptions';
import WhyChoose from '../LandingPage/WhyChoose/WhyChoose';
import Custamizable from "./Custamizable/Custamizable";
import Memorable from '../LandingPage/Memorable/Memorable';
import Footer from '../LandingPage/Footer/Footer';
import HomePage from "./HeroSection/HomePage/HomePage";



const LandingPage = () => {
 
    return (
        <div>         
            
            <HeroSection />
            {/* <GiftingExperience /> */}
            {/* <PlentyOptions /> */}
          
        </div>
    )
}
export default LandingPage;