import React from "react";
import Styles from '../Custamizable/Custamizable.module.scss';
import Custom from '../../../Asserts/Custom.png';
import Customgift from '../../../Asserts/Customgift.png';
import Ctowel from '../../../Asserts/Ctowel.png';
import Cshirt from '../../../Asserts/Cshirt.png';
import Cmart from '../../../Asserts/Cmart.png';
import Cspark from '../../../Asserts/Cspark.png';
import mobileTop from '../../../Asserts/mobileCustom.png'
import UseWindowSize from "../Window/UseWindowSize";


const Custamizable = () => {
    const size = UseWindowSize();
    console.log(size.width)
    let cImage
    if (size.width <= 738) {
        cImage = mobileTop
    }
    else {
        cImage = Custom
    }

    return (
        <div className={Styles.totalContent}>
            <div className={Styles.topFlex}>
                <div className={Styles.mainImg}>
                    <img src={cImage} alt="Custom" width="100%" />
                </div>
                <div className={Styles.secondImg}>
                    <img src={Customgift} alt="Customgift" width="100%" />
                </div>
            </div>
            <div className={Styles.cSpark}>
                <img src={Cspark} alt="Cspark" width="97px" height="215px" />
            </div>
            <div className={Styles.mapFlex}>
                <div className={Styles.totalTowel}>
                    <div className={Styles.towel}>
                        <img src={Ctowel} alt="towel" width="100%" />
                    </div>
                    <div className={Styles.towelCnt}>
                        <h3>Low MOQ?</h3>
                        <div className={Styles.border}></div>
                        <p>Not to worry, we will work it out</p>
                    </div>
                </div>
                <div className={Styles.totalShirt}>
                    <div className={Styles.shirt}>
                        <img src={Cshirt} alt="shirt" width="100%" />
                    </div>
                    <div className={Styles.shirtCnt}>
                        <h3>Brand customization</h3>
                        <div className={Styles.border}></div>
                        <p>Customizing products just for your brand</p>
                    </div>
                </div >
                <div className={Styles.totalMart}>
                    <div className={Styles.mart}>
                        <img src={Cmart} alt="mart" width="100%"  />
                    </div>
                    <div className={Styles.martCnt}>
                        <h3>Need hampers?</h3>
                        <div className={Styles.border}></div>
                        <p>Customize your hamper? We take care of it</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Custamizable; 