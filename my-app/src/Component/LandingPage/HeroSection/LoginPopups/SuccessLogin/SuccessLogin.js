import React from "react";
import Styles from './SuccessLogin.module.scss';
import Rocket from '../../../../../Asserts/p.png'

const SuccessLogin = ({flag}) => {
  
    return (
       <div>
       <div className={Styles.totalCard}>
            <div className={Styles.card} >

                <div className={Styles.success}>
                    <div className={Styles.plus}>
                        <p >+</p>
                    </div>
                    <h3> Success.!</h3>
                </div>
                <div className={Styles.loginText}>
                    <h5>Log in Successful</h5>
                </div>
                <div className={Styles.rocketImage}>
                    <img src={Rocket} alt="Rocket" width="230px" height="230px" />
                </div>
                <div className={Styles.twoButtons}>
                    <div className={Styles.leftButton}>
                        <button>Continue Shopping</button>
                    </div>
                    <div className={Styles.rightButton}>
                        <button> Go to My Orders</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
export default SuccessLogin;