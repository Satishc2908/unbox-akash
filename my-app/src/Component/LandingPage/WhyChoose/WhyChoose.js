import React from 'react';
import Styles from '../WhyChoose/WhyChoose.module.scss';
import Cnt from '../../../Asserts/Group 266.png';
import Left from '../../../Asserts/Rectangle 822.png';
import Right from '../../../Asserts/Rectangle 823.png';
import UseWindowSize from '../Window/UseWindowSize';
import mobileleftPic from '../../../Asserts/mobileFlexpic.png';
import leftBackground from '../../../Asserts/backgroundLeft.png';
import rightBackground from '../../../Asserts/backgrounright.png';
import upperImg from '../../../Asserts/upperImg.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import staticPlenty from '../../../Asserts/staticPlenty.png';


const WhyChoose = () => {
    const nSize = UseWindowSize();
    let textContent;
    if (nSize.width <= 768) {
        textContent = mobileleftPic
    }
    else {
        textContent = Cnt
    }
    return (
        <div className={Styles.totalCnt}>
            <div className={Styles.cntFlex}>
                <div className={Styles.rightFlex}>
                    {/* <div className={Styles.firstImg} >
                        <img src={Left} alt="Left" width="96px" />
                    </div>
                    <div className={Styles.totalBgimages}>
                        <div className={Styles.individualLeft}>
                            <img src={leftBackground} alt="leftBackground" width="100%" />
                        </div>
                        <div className={Styles.individualRight}>
                            <img src={rightBackground} alt="rightBackground" width="100%" />
                        </div>

                    </div> */}
                    {/* <div className={Styles.totalCorosel}>
                        <div className={Styles.tree}>
                            <img src={Left} alt="Left" width="96px" />
                        </div>
                        <div className={Styles.corosel}>
                            <img src={staticPlenty} alt="staticPlenty" width="100%" />
                        </div>
                    </div> */}

                    {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
                    {Array.map((item,idx)=>(
                <>
                <Slide index={idx}>

          </Slide>
                </>
            ))}
                    <Slide index={0} style={{position:'static'}} innerClassName={Styles.positionDefault}> 
               <div className={Styles.totalBgimages}>
                        <div className={Styles.individualLeft}>
                            <img src={leftBackground} alt="leftBackground" width="100%" />
                        </div>
                        <div className={Styles.individualRight}>
                            <img src={rightBackground} alt="rightBackground" width="100%" />
                        </div>

                    </div> 
                     <div className={Styles.upperImage}>
                        <img src={upperImg} alt="upperImg" width="100%" />

                    </div>     
          </Slide>

        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
      <div>
      
      </div>
                </div>
                <div className={Styles.starPosition}>
                    <div className={Styles.starImage}>
                        <img src={Right} alt="Right" width="100%" />
                    </div>
                    <div className={Styles.leftImg}>
                        <img src={textContent} alt="Cnt" width="100%" />
                    </div>
                    <div className={Styles.contentRight}>
                        <p>Choose your gifting person, may it be your new employee, best friend, colleague,
                            father or mother! We have it all that gives everyone an Unboxing experience!
                        </p>
                        <h3>Explore</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WhyChoose;