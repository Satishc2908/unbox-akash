import React from "react";
import Styles from '../GiftingExperience/GiftingExperience.module.scss';
import Headimage from '../../../Asserts/Gifting Exp.png';
import Video from '../../../Asserts/giftingVideo.png'
import fast from '../../../Asserts/fast.png';
import pan from '../../../Asserts/pan.png';
import brands from '../../../Asserts/brands.png';
import services from '../../../Asserts/service.png';
import leftImg from '../../../Asserts/Rectangle.png';
import rightImg from '../../../Asserts/Rectangle2.png';
import baloons from '../../../Asserts/Baloon.png';
import Left1 from '../../../Asserts/Rect.png';
import Group from '../../../Asserts/Group.png'
import Heart from '../../../Asserts/Heart.png';
import Box from '../../../Asserts/Box.png';
import Gifts from '../../../Asserts/Gifts.png';
import mobileGifting from '../../../Asserts/mobileGifting.png';
import mobileChoose from '../../../Asserts/mobileChoose.png'
import mobileVideoframe from '../../../Asserts/videoframeMobile.png';
import unBoxingVideo from '../../../Asserts/UnboxingVideo.mp4'
import UseWindowSize from '../Window/UseWindowSize';


const GiftingExperience = () => {
    const Adata = [{
        logo: fast,
        service: "Fastest delivery",
        cnt: "Sending in some real quick appreciation shouldn't be a problem with UnBox"

    }, {
        logo: pan,
        service: "Pan India fullfillment",
        cnt: "No matter where your employees are, near or far, we've got it covered"
    }, {
        logo: brands,
        service: "Verified brands",
        cnt: "Brands that are totally gift worthy with your branding"
    }, {
        logo: services,
        service: "24*7 services",
        cnt: "Dreaming of gifts at midnight? We hear you, loud & clear 24*7"
    }];

    const giftSize = UseWindowSize();
    let contentImg;
    let chooseMobile;
    if (giftSize.width <= 768) {
        contentImg = mobileGifting;
        chooseMobile = mobileChoose;

    }
    else {
        contentImg = Headimage;
        chooseMobile = Group;
    };


    return (
        <div className={Styles.completeContent}>
            <div className={Styles.totalContent}>
                <div className={Styles.flexContent}>
                    <div className={Styles.ball}>
                        <img src={leftImg} width="100%" />
                    </div>
                    <div className={Styles.topImage}>
                        <img src={contentImg} alt="Headimage" width="100%" />
                    </div>
                    <div className={Styles.decoration}>
                        <img src={rightImg} alt="rightImg" width="100%" />
                    </div>
                </div>
                <div className={Styles.vFrame}>
            
                    {giftSize.width<768 ? <img src={mobileVideoframe} width="100%"/> :<img src={Video} alt="Video" width="100%" /> }
                   <div className={Styles.positionClass}>
                   <div className={Styles.card}>
                        <div className={Styles.videoIframe}>
                            <iframe width="560" height="315" src={unBoxingVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                   </div>


                </div>
            </div>
            <div className={Styles.whyChoose}>
                <div className={Styles.Left1}>
                    <img src={Left1} alt="Left1" width="99px" />
                </div>
                <div className={Styles.Group}>
                    <img src={chooseMobile} alt="Group" width="100%" />
                </div>
                <div className={Styles.Heart}>
                    <img src={Heart} alt="Heart" width="100%" />
                </div>

            </div>
            <div className={Styles.dots}>
                <div className={Styles.dot1}></div>
                <div className={Styles.dot2}></div>
                <div className={Styles.dot3}> </div>
                <div className={Styles.dot4}></div>
            </div>
            <div className={Styles.downContent}>

                <div className={Styles.imageClass}>
                    <div className={Styles.imageBaloons}>
                        <img src={baloons} width="170px" height="263px" />

                    </div>
                    <div className={Styles.imageBox}>
                        <img src={Box} width="115px" height="92px" />
                    </div>
                    <div className={Styles.imageGift}>
                        <img src={Gifts} width="251px" height="157px" />
                    </div>
                </div>
                <div className={Styles.card}>
                    {
                        Adata.map((item) => (
                            <div className={Styles.mapCard}>
                                <div className={Styles.flexClass}>
                                    <div className={Styles.logo}>
                                        <img src={item.logo} />
                                    </div>
                                    <div className={Styles.cardContent}>
                                        <h3> {item.service}</h3>
                                        <div className={Styles.border}></div>
                                        <p>{item.cnt}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }

                </div>


            </div>
        </div>
    )
}
export default GiftingExperience;