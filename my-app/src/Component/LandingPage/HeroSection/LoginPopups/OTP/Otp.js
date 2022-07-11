import React, { useState } from 'react';
import Styles from './Otp.module.scss';

const Otp = (flag) => {
    const [close, setClose] = useState(flag);
    const otpClose = () => {
        setClose(!close)
    }

    return (
        <div>
            {close && (<div className={Styles.posCls}>
                <div className={Styles.cardWidth}>
                    <div className={Styles.welcome}>
                        <div className={Styles.plus}>
                            <h1 onClick={() => otpClose()}>+</h1>
                        </div>
                        <h3>Welcome back.</h3>
                    </div>
                    <div className={Styles.signinText}>
                        <h5>Or, sign in with your email</h5>
                    </div>
                    <div className={Styles.emailInput}>
                        <h6>Phone No<span>*</span></h6>
                        <input type="text" placeholder="Type your Phone No" />
                    </div>
                    <div className={Styles.passwordInput}>
                        <h6>Enter the OTP<span>*</span></h6>
                        <input type="text" placeholder="Enter the OTP to validate your number" />
                    </div>
                    <div className={Styles.keepMe}>
                        <div className={Styles.checkBox}>
                            <h4><span> <input type="checkbox" /></span>Keep me sign in</h4>
                        </div>
                    </div>
                    <div className={Styles.signinButton}>
                        <button>Validate OTP</button>
                    </div>
                    <div className={Styles.required}>
                        <p>*Required Fields</p>
                    </div>
                    <div className={Styles.noAccount}>
                        <h3>Don’t have an account? <span>Sign up now</span></h3>
                    </div>


                </div>
            </div>)}
        </div>
    )
}
export default Otp;
