import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Styles from './About.module.scss';
import About1 from '../../../../Asserts/About1.png'
import About2 from '../../../../Asserts/About2.png'
import About3 from '../../../../Asserts/About3.png'
import About4 from '../../../../Asserts/About4.png'
import About5 from '../../../../Asserts/About5.png'
import About6 from '../../../../Asserts/About6.png'
import About7 from '../../../../Asserts/About7.png'
import About8 from '../../../../Asserts/About8.png'
import leftImg from '../../../../Asserts/leftAbout.png'
import aboutImg from '../../../../Asserts/AboutImage.png'
import rightImg from '../../../../Asserts/rightAbout.png'


const AboutPage = () => {
  const images = [About1, About2, About3, About4, About5, About6, About7, About8]
  return (
    <div className={Styles.completeData}>
      <div className={Styles.mapData}>
        {
          images.map((item) =>
            <div className={Styles.Images}>
              <img src={item} />
            </div>
          )
        }

      </div>
      <div className={Styles.middleContent}>
        <div className={Styles.leftContent}>
          <img src={leftImg} />
        </div>
        <div className={Styles.imageContent}>
          <img src={aboutImg} />
        </div>
        <div className={Styles.rigtContent}>
          <img src={rightImg} />
        </div>
      </div>
      <div className={Styles.bgContent}>
        <div className={Styles.textSection}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit imperdiet ut dignissim tincidunt 
            sed mus amet consectetur. Eget ligula nec ac semper consectetur metus, enim sociis tortor. 
            Tristique ipsum urna malesuada nisl aenean sed porttitor nibh. Arcu, nibh amet, commodo
             sed sed mauris diam. Mi est arcu nullam mauris sit non. Ornare vel, at habitant at arcu.
              Amet, diam quisque adipiscing vel sempe quisque.
            Viverra fringilla vel eget a velit quam. Mi vitae, lacinia suspendisse et non. Orci, non  
            orci montes, molestie volutpat quis feugiat ultrices suspendisse. Luctus turpis dolor id massa.
             Enim nunc turpis ac eu. Dignissim neque pharetra placerat arcu cras interdum posuere. Eget tempus pharetra,
              purus leo in. Sit nulla vitae sit euismod. Ultricies maecenas blandit eu sit phasellus nulla lorem quis. Eget ipsum consequat, ut in ipsum neque aenean neque, urna. Faucibus diam ultrices consequat elit in lacus pharetra.
               Quisque donec sed eget ipsum ut accumsan ut. Nulla aenean adipiscing molesti tellus nec
            Felis lorem nibh nulla sed faucibus pretium urna. Lacus placerat sit at aliquam eget neque. 
            Id mauris condimentum tempus arcu. Velit, sed eget sit ac ultrices. Ullamcorper convallis iaculis 
            in ac mollis arcu.
            Lobortis libero habitasse iaculis libero vitae vel nunc, vel. Vehicula urna posuere tortor, id.
             Id mollis eget pretium in facilisis nunc, mattis. Mi enim augue non neque. Vulputate volutpat minance, consectetur id. Nulla tempus nam amet vestibulum of the institute. </p>

        </div>
      </div>


    </div>

  )
}
export default AboutPage