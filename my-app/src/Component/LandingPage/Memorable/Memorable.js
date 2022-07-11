import React from "react";
import Styles from '../Memorable/Memorable.module.scss';
import Frame2 from '../../../Asserts/FrameCnt.png';
import Card from '../../../Asserts/mobileCard.png';
import leftCart from '../../../Asserts/upperCart.png';
import rightCart from '../../../Asserts/downCart.png';
import UseWindowSize from "../Window/UseWindowSize";


const Memorable = () => {
    const size = UseWindowSize()
    let memorable;
    if (size.width <= 768) {
        memorable = Card;
    }
    else {
        memorable = Frame2;
    }
    return (
        <div className={Styles.flexCnt}>
            <div className={Styles.forWidth}>
                <div className={Styles.leftCard}>
                    <img src={leftCart} alt="leftCard" width="100%" />
                </div>

                <div className={Styles.topImage}>
                    <img src={memorable} alt=" FrameContent" width="100%" />
                </div>
                <div className={Styles.downCnt}>
                    <div className={Styles.content}>
                        <p>Share us your requirements,
                            likes and interests! We will curate a customized unboxing experience for you!
                        </p>
                        <div className={Styles.twoButtons}>
                            <button className={Styles.sample}>Send a sample</button>
                            <button className={Styles.enquire}>Enquire now</button>
                        </div>
                    </div>
                </div>
                <div className={Styles.rightCard}>
                    <img src={rightCart} alt="rightCard" width="100%" />
                </div>
            </div>

        </div>
    )
}
export default Memorable;