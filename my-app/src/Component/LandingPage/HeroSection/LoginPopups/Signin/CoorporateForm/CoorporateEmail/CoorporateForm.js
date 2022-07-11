import React, { useState } from "react";
import Styles from './CoorporateForm.module.scss';
import axios from "axios";
import PasswordStrengthMeter from '../../PasswordStrength/PasswordStrengthMeter';





const CoorporateForm = ({ setSelected, selected }) => {
    console.log('user', selected);

    const [errorMsg, setErrorMsg] = useState("");
    const [confirmPassword, setConfirmPaswword] = useState("")
    const radioOptions = ['Email id', 'Mobile Number'];
    const [data, setData] = useState({
        user_name: '',
        password: '',
        validated: 'false',
        user_type_id: '',
        signup_with: ''

    });
    const { user_name, password, validated, user_type_id, signup_with } = data;

    const onchnageHandler = (e) => {
        setSelected(e.target.value);
        data.signup_with = e.target.value;

    }

    data.user_type_id = selected;
    if (data.user_type_id === 'Coorporate') {
        data.user_type_id = '1'
    }
    const evenHandler = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }


    const sumbitHandler = (e) => {
        e.preventDefault()
        console.log('data,', data)

        axios.post('http://13.232.97.200:8080/signUp', {

            user_name: `${user_name}`,
            password: `${password}`,
            validated: 'false',
            user_type_id: `${user_type_id}`,
            signup_with: `${signup_with}`
        }
          
        ).then((response) => {
            console.log("status", response.status);
            console.log("data", response.data)
        })
            .catch((error) => {
                console.error("something has went wrong!", error)
            })

    }
    const confirmHandler = (e) => {
        const updateConfirm = (e.target.value);
        setConfirmPaswword(updateConfirm)
        if (password != updateConfirm) {
            setErrorMsg("password need to match")
        }
        else {
            setErrorMsg("")
        }
    }
    const [isStrength, setStrength] = useState(null);
    const dataHandler = async (childData) => {
        setStrength(childData);
      }


    return (
        <div>

            <div className={Styles.personalInfo}>
                <div className={Styles.personalText}>
                    <h4>Personal Information</h4>
                </div>
                <div className={Styles.companyText}>
                    <h3>Company Name<span>*</span></h3>
                    <input type="text" placeholder="Type your Company name" />
                    <p>Sign Up using</p>
                </div>
                <form onSubmit={sumbitHandler}>
                    <div className={Styles.radioInfo}>
                        {radioOptions.map((options) => (
                            <div className={Styles.radioLeft}>
                                <input type="radio" value={options}
                                    onChange={onchnageHandler}
                                    checked={options == 'Email id' ? true : false}
                                />
                                <label>{options}</label>
                            </div>
                        ))}
                    </div>

                    <div className={Styles.coorporateInfo}>
                        <h3> Corporate Email<span>*</span></h3>
                        <input type="text" name='user_name' placeholder='username' value={user_name} onChange={(e) => evenHandler(e)} />
                    </div>
                    <div className={Styles.coorporateInfo}>
                        <h3>Password </h3>
                        <input type="password" name='password' placeholder=" password" value={password} onChange={(e) => evenHandler(e)} />
                        <PasswordStrengthMeter password={data.password} actions={dataHandler}/>
                    </div>
                    <div className={Styles.coorporateInfo}>
                        <h3>Confirm Password</h3>
                        <input type="password" placeholder="Confirm Password" name='Confirm Password' value={confirmPassword} onChange={(e) => confirmHandler(e)} />
                        <p>{errorMsg}</p>
                    </div>

                    <div className={Styles.buttonInfo}>
                        <button type="submit" > subimt</button>      
                    </div>

                    <div className={Styles.requiredFields}>
                        <p>*Required Fields</p>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default CoorporateForm;