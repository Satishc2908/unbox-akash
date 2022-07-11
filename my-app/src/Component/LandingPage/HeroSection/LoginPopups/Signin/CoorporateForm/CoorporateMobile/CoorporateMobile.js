import React, { useState } from "react";
import Styles from './Coorporate.module.scss';

const CoorporateMobile = ({ setSelected, selected }) => {
    console.log("mobile",selected)

    const radioOptions = ['Email id', 'Mobile Number'];
    // const [slected, setSelected] = useState('');
    const onchnageHandler = (e) => {
        setSelected(e.target.value);
    }
    return (
    
            <div>
                <div className={Styles.personalInfo}>

                    <div className={Styles.personalText}>
                        <h4>Personal Information</h4>
                    </div>
                    <div className={Styles.companyText}>
                        <h3>Bussiness Name<span>*</span></h3>
                        <input type="text" placeholder="Enter your Business name" />
                        <p>Sign Up using</p>
                    </div>
                    <div className={Styles.radioInfo}>
                        {radioOptions.map((options) => (
                            <div className={Styles.radioLeft}>
                                <input type="radio" value={options} 
                                 onChange={onchnageHandler}
                                checked ={options =='Mobile Number' ? true : false}
                                 />
                                 <label>{options}</label>
                            </div>
                        ))}
                    </div>
                    <div className={Styles.coorporateInfo}>
                        <h3> Mobile Number<span>*</span></h3>
                        <input type="text" placeholder='Enter your Mobile No' />
                    </div>
                    <div className={Styles.coorporateInfo}>
                        <h3>Enterthe OTP <span>*</span></h3>
                        <input type="number" placeholder='Enter the OTP to validate your number' />
                    </div>
                    <div className={Styles.buttonInfobussiness}>
                        <input type="submit" value="Validate OTP" />
                    </div>

                    <div className={Styles.requiredFields}>
                        <p>*Required Fields</p>
                    </div>
                </div>
            </div>
    )
}
export default CoorporateMobile;