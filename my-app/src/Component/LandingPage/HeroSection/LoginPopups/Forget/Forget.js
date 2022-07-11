import React, { useState } from "react";
import Styles from './Forget.module.scss';
import Opt from '../Signin/Signin'

const Forget = ({ flag,openSignup}) => {   
    const [forgetClose, setForgetClose] = useState(flag);
    const [opensignup,setopensignuop] = useState(openSignup)
    const forgetCloseMethod = () => {
        setForgetClose(!forgetClose);
        setopensignuop(true)
    }
    const ForgetMethod =()=>{
        return(
        <>
        
            {forgetClose && (
                <div className={Styles.forgetposClsn} >
                    <div className={Styles.forcardWidthn}>
                        <div className={Styles.welcomen}>
                            <div className={Styles.plusn}>
                                <h1 onClick={() => forgetCloseMethod()}>+</h1>
                            </div>
                            <h3>Welcome back.</h3>
                        </div>
                        <div className={Styles.signinTextn}>
                            <h5>Forgot Password</h5>
                        </div>
                        <div className={Styles.contentn}>
                            <h6>Type your email/Phone No and we will send you a reset link for your password.</h6>
                        </div>
                        <div className={Styles.emailInputn}>
                            <h6>Email/Phone No<span>*</span></h6>
                            <input type="text" placeholder="Type your email/Phone No" />
                        </div>

                        <div className={Styles.signinButtonn}>
                        </div>
                    </div>
                </div>
            )}
        </>
        )
    }
    const Sign =()=>{
        return(
            <div>
                <Opt />
            </div>
        )
    }

    return (
        <div>
            {forgetClose ? <ForgetMethod /> : <Sign />}
    
        </div>
    )
}
export default Forget;