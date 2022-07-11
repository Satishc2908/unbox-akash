import React, { useState } from "react";
import Styles from '../Navbar/Navbar.module.scss';
import Logo from '../../../../Asserts/Logo.png';
import searchIcon from '../../../../Asserts/searchIcon.png';
import toggleBar from '../../../../Asserts/toggleBar.png';
import UseWindowSize from '../../../LandingPage/Window/UseWindowSize';
import bg from '../../../../Asserts/dropdownBg.png';
import Signin from "../LoginPopups/Signin/Signin";
import Otp from "../LoginPopups/OTP/Otp";
import Forget from "../LoginPopups/Forget/Forget";
import { Link } from 'react-router-dom'



const Navbar = () => {
    const [login, setLogin] = useState(false);
    const size = UseWindowSize();
    const [toggle, setToggle] = useState(true);


    const toggleMethod = () => {
        if (size.width <= 768) {
            setToggle(!toggle);
        }

    }
    const LoginMethod = () => {
        setLogin(!login);
    }


    return (

        <div>
            <div className={Styles.head}>
                <div className={Styles.toggleIcon}>
                    <img src={toggleBar} width='100%' onClick={() => toggleMethod()} />
                </div>
                <div className={Styles.logo}><img src={Logo} alt="logo" /></div>
                <div className={Styles.searchIcon}>
                    <img src={searchIcon} width='100%' />
                </div>

                {toggle && (
                    <div className={Styles.lists}>
                        <p onClick={() => toggleMethod()} className={Styles.closeicon}>close</p>
                        {size.width <= 768 && (
                            <div><img src={Logo} alt="logo" width="200px" /></div>
                        )}

                        <ul>
                            <Link to='/'><li> Home</li></Link>
                            <li>
                                    <select>
                                        <option>Categories</option>
                                        <option>New joinee</option>
                                        <option>Anniversary</option>
                                
                                        <option>Occasion-based</option>
                                        <option>Festive</option>
                                        <option>General</option>
                                        <option>Eco-friendly</option>
                                    </select>  
                            </li>
                            <Link to='/about'><li> About</li></Link>
                        </ul>
                    </div>
                )}
                <div className={Styles.searchbutton}>
                    <div>
                        <img src={searchIcon} alt="searchIcon" />
                    </div>
                    <div>
                        <button onClick={() => LoginMethod()}>Login</button>
                    </div>

                </div>
            </div>
            {login && (
                <Signin flag={login} />
            )}


        </div>

    )
}
export default Navbar;