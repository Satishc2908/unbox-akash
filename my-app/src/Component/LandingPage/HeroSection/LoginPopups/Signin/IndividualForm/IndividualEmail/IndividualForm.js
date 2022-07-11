import React, { useState } from "react";
import Styles from './Individual.module.scss';
import IndividualMobile from "../IndividualMobile/IndividualMobile";
import axios from "axios";

const IndividualForm = ({ setSelected, selected }) => {


    const radioOptions = ['Email id', 'Mobile Number'];

    const [errorMsg, setErrorMsg] = useState("");
    const [confirmPassword, setConfirmPaswword] = useState("")
    const onchnageHandler = (e) => {
        setSelected(e.target.value);
    }

    const [data, setData] = useState({
        user_name: '',
        password: '',
        validated: 'false',
        user_type_id: '',
        signupWith: "email"
    });

    const { user_name, password, validated, user_type_id } = data;
    data.user_type_id = selected;
    if (data.user_type_id === 'Coorporate') {
        data.user_type_id = '2'
    }
    const evenHandler = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }
    const sumbitHandler = (e) => {
        e.preventDefault()

        axios.post('http://13.232.97.200:8080/signUp', {
            'user_name': `${user_name}`,
            'password': `${password}`,
            'validated': 'false',
            'user_type_id': `${user_type_id}`,
            "signupWith": 'email'

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

    return (
        <div>
            <div>
                <div className={Styles.personalInfo}>
                    <div className={Styles.personalText}>
                        <h4>Personal Information</h4>
                    </div>
                    <div className={Styles.companyText}>
                        <h3>Full Name<span>*</span></h3>
                        <input type="text" placeholder="Enter your Business name" />
                        <p>Sign Up using</p>
                    </div>
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
                    <form onSubmit={sumbitHandler}>
                        <div className={Styles.coorporateInfo}>
                            <h3> Individual Email<span>*</span></h3>
                            <input type="text" name='user_name' placeholder='username' value={user_name} onChange={(e) => evenHandler(e)} />
                        </div>
                        <div className={Styles.coorporateInfo}>
                            <h3>Password </h3>
                            <input type="password" name='password' placeholder=" password" value={password} onChange={(e) => evenHandler(e)} />
                        </div>
                        <div className={Styles.coorporateInfo}>
                            <h3>Confirm Password</h3>
                            <input type="password" placeholder="Confirm Password" name='Confirm Password' value={confirmPassword} onChange={(e) => confirmHandler(e)} />
                            <p>{errorMsg}</p>
                        </div>
                        <div className={Styles.buttonInfo}>
                            <button type="submit" > subimt</button>
                        </div>

                    </form>
                    <div className={Styles.requiredFields}>
                        <p>*Required Fields</p>
                    </div>
                </div>
            </div>
            {selected == 'Mobile Number' && (<IndividualMobile setSelected={setSelected} selected={selected} />)}

        </div>
    )
}
export default IndividualForm;