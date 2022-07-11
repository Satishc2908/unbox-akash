
import React, { useContext, useState } from 'react';
import Styles from './Signin.module.scss';
import Phone from '../../../../../Asserts/signinPhone.png';
import otpStyles from '../OTP/Otp.module.scss';
import Forget from '../Forget/Forget';
import Otp from '../OTP/Otp';
import SignUp from '../Login/Login'
import forgetStyles from '../Forget/Forget.module.scss';
import axios from "axios";
import Styles3 from '../Signin/Signin.module.scss'
import CoorporateEmail from './CoorporateForm/CoorporateEmail/CoorporateForm';
import CoorporateMobile from '../Signin/CoorporateForm/CoorporateMobile/CoorporateMobile'
import IndividualEmail from '../Signin/IndividualForm/IndividualEmail/IndividualForm';
import SuccessLogin from '../SuccessLogin/SuccessLogin';
import { userDetailContext } from '../Signin/CoorporateForm/CoorporateEmail/CoorporateForm';
import IndividualMobile from './IndividualForm/IndividualMobile/IndividualMobile';


const Signin = ({ flag }) => {
    // console.log('userDetailContext',userDetailContext);
    // console.log()

    // const UserContext1 = useContext(UserContext);
    // console.log('UserContext1',UserContext1);

    const [closeToggle, setcloseToggle] = useState(flag);
    const [numberLogin, setNumberLogin] = useState(false);
    const [forget, setForget] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [success, setSuccess] = useState(false);
    const CloseMethod = () => {
        setcloseToggle(!closeToggle);

    }
    const CloseSignup = () => {
        setSignIn(!signIn)
        setcloseToggle(!closeToggle);
    }

    const forgetHandle = () => {
        setForget(!forget);
        setcloseToggle(!closeToggle);
    }
    const senterMethod = () => {
        setSignIn(!signIn);
        setcloseToggle(!closeToggle)
    }
    const numberMethod = () => {
        setNumberLogin(!numberLogin);
        setcloseToggle(!closeToggle)
    }
    const forgetCloseMethod = () => {
        setForget(!forget);
        setcloseToggle(!closeToggle);
    }


    const SignInForm = () => {
        const [data, setData] = useState({
            user_name: '',
            password: '',
        })
        const { user_name, password } = data;
        const evenHandler = (e) => {
            setData({ ...data, [e.target.name]: [e.target.value] });
            console.log(e)
        }

        const sumbitHandler = (e) => {
            e.preventDefault()

            axios.post('http://13.232.97.200:8080/signIn', {
                'user_name': `${user_name}`,
                'password': `${password}`,
            }).then((response) => {
                console.log("data", response.data)
            })
                .catch((error) => {
                    console.error("something has went wrong!", error)
                })


        }
        const successSubmit =()=>{
            setSuccess(!success);
            setcloseToggle(!closeToggle);
        }
        return (
            <div>
                {closeToggle && (
                    <div className={Styles.posCls1}>
                        <div className={Styles.cardWidth1}>
                            <div className={Styles.welcome}>
                                <div className={Styles.plus}>
                                    <h1 onClick={() => CloseMethod()}>+</h1>
                                </div>
                                <h3>Welcome back.</h3>
                            </div>
                            <div className={Styles.mobile}>
                                <h4 onClick={() => numberMethod()}>Sign in with Phone Number</h4>
                                <div className={Styles.image}>
                                    <img src={Phone} alt="100%" />
                                </div>

                            </div>
                            <div className={Styles.signinText}>
                                <h5>Or, sign in with your email</h5>
                            </div>
                            <form onSubmit={sumbitHandler}>
                                <div className={Styles.form}>
                                    <h4>Email/Username<span>*</span></h4>
                                    <input type="text" name='user_name' placeholder='username' value={user_name} onChange={(e) => evenHandler(e)} /><br />
                                    <h4>Password<span>*</span></h4>
                                    <input type="text" name='password' placeholder=" password" value={password} onChange={(e) => evenHandler(e)} /><br />

                                    <div className={Styles.keepMe1}>
                                        <div className={Styles.kleft}>
                                            <h3><span><input type="checkbox" /></span>Keep me sign in </h3>
                                        </div>
                                        <div className={Styles.kright}>
                                            <h3 onClick={() => forgetHandle()}>Forget Password</h3>
                                        </div>

                                    </div>
                                    <div className={Styles.ButtonClass}>
                                        <button type="submit" >Submit</button>
                                    </div>
                                </div>

                            </form>
                            <div className={Styles.required}>
                                <p>*Required Fields</p>

                            </div>
                            <div className={Styles.noAccount}>
                                <h3>Don’t have an account? <span onClick={() => senterMethod()}>Sign up now</span></h3>
                            </div>


                        </div>

                    </div>

                )}
            </div>
        )
    }

    const ForgetMethod = () => {
        return (
            <>
                {forget && (
                    <div className={Styles.fposCls} >
                        <div className={Styles.fcardWidth}>
                            <div className={Styles.fwelcome}>
                                <div className={Styles.fplus}>
                                    <h1 onClick={() => forgetCloseMethod()}>+</h1>
                                </div>
                                <h3>Welcome back.</h3>
                            </div>
                            <div className={Styles.fsigninText}>
                                <h5>Forgot Password</h5>
                            </div>
                            <div className={Styles.fcontent}>
                                <h6>Type your email/Phone No and we will send you a reset link for your password.</h6>
                            </div>
                            <div className={Styles.femailInput}>
                                <h6>Email/Phone No<span>*</span></h6>
                                <input type="text" placeholder="Type your email/Phone No" />
                            </div>

                            <div className={Styles.fsigninButton}>
                                <button>Reset password</button>
                            </div>
                        </div>
                    </div>

                )}
            </>
        )
    }
    const Otp = () => {
        return (
            <div>
                {numberLogin && (<div className={otpStyles.posCls}>
                    <div className={otpStyles.cardWidth}>
                        <div className={otpStyles.welcome}>
                            <div className={otpStyles.plus}>
                                <h1 onClick={() => numberMethod()}>+</h1>
                            </div>
                            <h3>Welcome back.</h3>
                        </div>
                        <div className={otpStyles.signinText}>
                            <h5>Or, sign in with your email</h5>
                        </div>
                        <div className={otpStyles.emailInput}>
                            <h6>Phone No<span>*</span></h6>
                            <input type="text" placeholder="Type your Phone No" />
                        </div>
                        <div className={otpStyles.passwordInput}>
                            <h6>Enter the OTP<span>*</span></h6>
                            <input type="text" placeholder="Enter the OTP to validate your number" />
                        </div>
                        <div className={otpStyles.keepMe}>
                            <div className={otpStyles.checkBox}>
                                <h4><span> <input type="checkbox" /></span>Keep me sign in</h4>
                            </div>
                        </div>
                        <div className={otpStyles.signinButton}>
                            <button>Validate OTP</button>
                        </div>
                        <div className={otpStyles.required}>
                            <p>*Required Fields</p>
                        </div>
                        <div className={otpStyles.noAccount}>
                            <h3>Don’t have an account? <span>Sign up now</span></h3>
                        </div>


                    </div>
                </div>)}
            </div>
        )
    }
    const SignUp = () => {

        // const RadioData = useContext(userDetailContext);
        // console.log('ytest',RadioData);

        // let type = '';
        let [selected,  setSelected] = useState('');
        const selectedOptions = ['Individual/Corporate*', 'Coorporate', 'Individual'];
        const selectOptionHandler = (e) => {
            setSelected(e.target.value);
        }
        // if (selected === 'Coorporate') {
        //     type = 'Corporate';
        // }
        // else if (selected === 'Individual') {
        //     type = 'Individual'
        // }
      



        return (
            <div>

                {signIn && (<div className={Styles.mainDivision}><div className={Styles.totalDivision}>

                    <div className={Styles.content1Welcome}>
                        <div className={Styles.contentplus}>
                            <h1 onClick={() => CloseSignup()}>+</h1>
                        </div>
                        <h3>Welcome back</h3>
                    </div>
                    <div className={Styles.dropDown}>
                        <select onChange={selectOptionHandler}>
                            {selectedOptions.map((options) => (
                                <option value={options}>{options}</option>
                            ))}
                        </select>

                    </div>
                    {(selected === 'Coorporate' || selected === '') && <CoorporateEmail setSelected={setSelected} selected={selected}/>}
                    {(selected === 'Mobile Number') && <CoorporateMobile setSelected={setSelected} selected={selected}/>} 
                    {(selected === 'Email id')&& <CoorporateEmail setSelected={setSelected} selected={selected}/>} 
                    {selected === 'Individual' && <IndividualEmail setSelected={setSelected} selected={selected}/>}
                    {/* {(selected === 'individual' && 'Mobile Number' ) && <IndividualMobile setSelected={setSelected} selected={selected}/>} */}
           




                    {/* {RadioData ==='Mobile Number' && <></>} */}
                    {/* {type && (
                        <div className={Styles.personalInfo}>

                            <div className={Styles.personalText}>
                                <h4>Personal Information</h4>
                            </div>
                            <div className={Styles.companyText}>
                                <h3>Company Name<span>*</span></h3>
                                <input type="text" placeholder="Type your Company name" />
                                <p>Sign Up using</p>
                            </div>
                            <div className={Styles.radioInfo}>
                                <div className={Styles.radioLeft}>
                                    <input type="radio" /><label>Email id</label>
                                </div>
                                <div className={Styles.radioRight}>
                                    <input type="radio" /><label>Mobile Number</label>
                                </div>
                            </div>
                            <div className={Styles.coorporateInfo}>
                                <h3> Corporate Email<span>*</span></h3>
                                <input type="text" placeholder='Type your Corporate email' />
                            </div>
                            <div className={Styles.coorporateInfo}>
                                <h3>Password </h3>
                                <input type="text" placeholder='password' />
                            </div>
                            <div className={Styles.buttonInfo}>
                                <input type="submit" />
                            </div>

                            <div className={Styles.requiredFields}>
                                <p>*Required Fields</p>
                            </div>
                        </div>
                    )} */}
                    {/* ==============================mobile====================== */}

                    {/* {type && (<div className={Styles.personalInfo}>

                        <div className={Styles.personalText}>
                            <h4>Personal Information</h4>
                        </div>
                        <div className={Styles3.companyText}>
                            <h3>Bussiness Name<span>*</span></h3>
                            <input type="text" placeholder="Enter your Business name" />
                            <p>Sign Up using</p>
                        </div>
                        <div className={Styles.radioInfo}>
                            <div className={Styles.radioLeft}>
                                <input type="radio" /><label>Email id</label>
                            </div>
                            <div className={Styles.radioRight}>
                                <input type="radio" /><label>Mobile Number</label>
                            </div>
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
                    )}                    ==========================individual=============== */}
                    {/* <div className={Styles.personalInfo}>
                        <div className={Styles.personalText}>
                            <h4>Personal Information</h4>
                        </div>
                        <div className={Styles3.companyText}>
                            <h3>Full Name<span>*</span></h3>
                            <input type="text" placeholder="Enter your Business name" />
                            <p>Sign Up using</p>
                        </div>
                        <div className={Styles.radioInfo}>
                            <div className={Styles.radioLeft}>
                                <input type="radio" /><label>Email id</label>
                            </div>
                            <div className={Styles.radioRight}>
                                <input type="radio" /><label>Mobile Number</label>
                            </div>
                        </div>
                        <div className={Styles.coorporateInfo}>
                            <h3> Personal Email<span>*</span></h3>
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
                    </div> */}
                    {/* =====================individual mobile===================== */}


                    {/* <div className={Styles.personalInfo}>
                        <div className={Styles.personalText}>
                            <h4>Personal Information</h4>
                        </div>
                        <div className={Styles3.companyText}>
                            <h3>Full Name<span>*</span></h3>
                            <input type="text" placeholder="Enter your Business name" />
                            <p>Sign Up using</p>
                        </div>
                        <div className={Styles.radioInfo}>
                            <div className={Styles.radioLeft}>
                                <input type="radio" /><label>Email id</label>
                            </div>
                            <div className={Styles.radioRight}>
                                <input type="radio" /><label>Mobile Number</label>
                            </div>
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
                    </div> */}
                </div></div>)}
            </div>

        )
    }
    return (
        <>
            {closeToggle ? <SignInForm /> : <ForgetMethod />}
            {numberLogin ? <Otp /> : <SignInForm />}
            {signIn ? <SignUp /> : <SignInForm />}
            {success ? <SuccessLogin flag={success}/> : <SignInForm />}

        </>
    )
}
export default Signin;