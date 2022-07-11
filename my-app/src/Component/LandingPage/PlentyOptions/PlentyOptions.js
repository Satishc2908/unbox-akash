import React from "react";
import PlentyImg from '../../../Asserts/plenty options.png';
import Stars from '../../../Asserts/stars.png';
import Styles from '../PlentyOptions/PlentyOptions.module.scss'
import shoe from '../../../Asserts/Rectangle 258.png';
import flower from '../../../Asserts/Rectangle 283.png';
import teddy from '../../../Asserts/Rectangle 284.png';
import dress from '../../../Asserts/Rectangle 285.png';
import watch from '../../../Asserts/Rectangle 286.png';
import cake from '../../../Asserts/Rectangle 287.png';
import car from '../../../Asserts/Rectangle 288.png';
import pairs from '../../../Asserts/Rectangle 289.png';
import mobileResponse from '../../../Asserts/mobilePosition.png';
import UseWindowSize from '../Window/UseWindowSize';
import plentyGift from '../../../Asserts/plentyGift.png';



const PlentyOptions = () => {
    const size = UseWindowSize();
    let commonn;
    if (size.width <= 768) {
        commonn = mobileResponse;
    }
    else {
        commonn = PlentyImg;
    }
    const optionsData = ["New-joinee kits", "Anniversary", "Occasion-based", "Festive", "General", "Eco-friendly"]
   
    return (
        <div className={Styles.completePlenty}>
            <div className={Styles.makeWidth}>
                <div className={Styles.totalHeader}>
                    <div className={Styles.img1}>
                        <img src={Stars} alt="stars" width="100%" />
                    </div>
                    <div className={Styles.plentyGift}>
                        <img src={plentyGift} alt="plentyGift" width="100%" />
                    </div>
                    <div className={Styles.rightContent}>
                        <div className={Styles.firstImg}>
                            <img src={commonn} alt="PlentyImg" width="100%" />
                        </div>
                        <div className={Styles.completeD}> 
                            <select>
                                <option>General</option>
                                <option>New Joinee</option>
                                <option>Anniversary</option>
                                <option>Occasion-based</option>
                                <option>Festive</option>
                                <option>General</option>
                                <option>Eco-friendly</option>
                            </select>
                        </div>

                        <div className={Styles.totalButtons}>
                            {
                                optionsData.map((items) => (
                                    <div className={Styles.map}>
                                        <button>{items}</button>
                                    </div>
                                ))

                            }
                        </div>
                        <div className={Styles.paragraphDivision}>
                            <p>Umpteen options to choose from in all price range!</p>
                        </div>
                    </div>

                </div>
            </div> 
            <div className={Styles.totalImages}>
                <div className={Styles.flexImage}>
                    <div className={Styles.shoe}>
                        <img src={shoe} alt="productImages" width="100%" />
                    </div>
                    <div className={Styles.dress}>
                        <img src={dress} alt="productImages" width="100%"  />  
                    </div>
                    <div className={Styles.cake} >
                        <img src={cake} alt="productImages" width="100%" />
                    </div>
                    <div className={Styles.pairs}>
                        <img src={pairs} alt="productImages" width="100%" />
                    </div>
                    <div className={Styles.teddy}>
                        <img src={teddy} alt="productImages" width="100%" />
                    </div>
                    <div className={Styles.flower}>
                        <img src={flower} alt="productImages" width="100%"/>
                    </div>
                    <div className={Styles.watch}>
                        <img src={watch} alt="productImages" width="100%"/>
                    </div>
                    <div className={Styles.car}>
                        <img src={car} alt="productImages" width="100%" />
                    </div>


                </div>
                <div className={Styles.explore}>
                    <h4>Explore more</h4>

                </div>
            </div>
        </div>
    )
}
export default PlentyOptions;