import React, { useEffect } from "react";
import Styles from '../Navcontent/Navcontent.module.scss';
import ContentLogo from '../../../../Asserts/contentLogo.png'
import mobileContent from '../../../../Asserts/mobileImg.png';
import Video from '../../../../Asserts/video frame.png';
import bgImage from '../../../../Asserts/background.png';
import UseWindowSize from '../../Window/UseWindowSize'
import Navbar from "../Navbar/Navbar";


const Navcontent = () => {
    const size = UseWindowSize();
    console.log("size", size.width)
    let common;
    if (size.width <= 768) {
        common = mobileContent;
    }
    else {
        common = ContentLogo;
    }


    return (
        <>
        
        <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", paddingBottom: "247px",marginTop:"-197px"}}>
            <div className={Styles.Navcomplete}>
                <div className={Styles.logo}>
                    <img src={common} alt="logo" width="100%" />
                </div>
                <div className={Styles.para}>
                    <p>It is always a right reason to gift someone! We help you create a truly memorable gifting experience! What are you waiting for? </p>
                </div>
                <div className={Styles.buttonclass}>
                    <button className={Styles.b1}>Explore </button>
                    <button className={Styles.b2}>Enquire Now</button>

                </div>

            </div>
        </div>
        </>
    )
}
export default Navcontent;