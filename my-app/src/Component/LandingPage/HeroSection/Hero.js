import React from "react";
import Navbar from '../HeroSection/Navbar/Navbar';
import Navcontent from '../HeroSection/Navcontent/Navcontent';
import Styles from '../HeroSection/Hero.module.scss';
import bg from '../../../Asserts/background.png';
import mobileNBg from '../../../Asserts/mobileBng.png';
import UseWindowSize from '../Window/UseWindowSize';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";


import Home from '../HeroSection/HomePage/HomePage';
import About from '../HeroSection/AboutPage/AboutPage'


const Hero = () => {
    const bgSize = UseWindowSize();
    let bgImage;
    if (bgSize.width <= 768) {
        bgImage = mobileNBg;
    }
    else {
        bgImage = bg;
    }

    return (
        <div>
            <div>
                <div className={Styles.contentwidth}>
                    <BrowserRouter> 
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" exact component={About} />
                        </Switch>
                    </BrowserRouter> 

                </div>

            </div>
        </div>
    )
}
export default Hero;