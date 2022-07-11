import React from "react";
import Styles from '../Footer/Footer.module.scss';
import Logo from '../../../Asserts/Logo.png';
import FB from '../../../Asserts/Fb.png';
import Insta from '../../../Asserts/Insta.png';
import Link from '../../../Asserts/Link.png';
import Lastgift from '../../../Asserts/lastgift.png';
import UseWindowSize from "../Window/UseWindowSize";


const Footer = () => {
    const size = UseWindowSize()

    return (
        <div>


            <div className={Styles.contentFlex}>
                <div className={Styles.logoDiv}>
                    <div className={Styles.mainLogo}>
                        <img src={Logo} alt=" Logo" width="179px" />
                    </div>
                    <p>It is always a right reason to gift someone! We help you create
                        a truly memorable gifting experience! What are you waiting for?
                    </p>
                    <div className={Styles.socialMedia}>
                        <div>
                            <img src={FB} alt="fb" width="31px" />

                        </div>
                        <div>
                            <img src={Insta} alt="Insta" width="31px" />
                        </div>
                        <div>
                            <img src={Link} alt="Link" width="31px" />
                        </div>
                    </div>
                    <div className={Styles.lastGift}>
                        <img src={Lastgift} alt="Lastgift" width="127" height="167px" />
                    </div>

                </div>
                <div className={Styles.moreServices}>
                    <div className={Styles.categories}>
                        <h3>Categories</h3>
                        <ul>
                            <li>Welcome Kit</li>
                            <li>Anniversary</li>
                            <li>Occasion-based</li>
                            <li>Festive</li>
                            <li>General</li>
                        </ul>
                    </div>
                    <div className={Styles.company}>
                        <h3>Company</h3>
                        <ul>
                            <li>Career</li>
                            <li>About</li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    <div className={Styles.support}>
                        <h3>Support</h3>
                        <ul>
                            <li>FAQ's</li>
                            <li>Support</li>
                            <li>Feedback</li>
                            <li>Enquiry</li>
                            <li>Catalog</li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.message}>
                    <div>
                        <h3>Drop a message!</h3>
                    </div>
                    <div>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email Id" />
                    </div>
                    <div>
                        <textarea placeholder="Write your message" id="w3review" name="w3review" rows="4" cols="50" > </textarea>
                    </div>
                    <div className={Styles.buttonMain}>
                        <button>Submitt</button>
                    </div>
                </div>

            </div>
            <div>

            </div>
            <div className={Styles.lastContent}>
                <h3>Copyright © 2022 Unboxnow Inc. All rights reserved</h3>
            </div>
        </div>
    )
}
export default Footer;