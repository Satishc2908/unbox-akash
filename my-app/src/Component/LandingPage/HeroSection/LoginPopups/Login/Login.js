// import React ,{useState} from "react";
// import Styles from './Login.module.scss';

// const Login =()=>{
//     const [person,setPerson]=useState();
//     const individualHandler = e =>{
//         setPerson(e.target.value)
//     }
//     const coorporateHandler = e =>{
//         setPerson(e.target.value)
//     }

//     return(
//         <div>
//             <div className={Styles.posCls} >
//                     <div className={Styles.cardWidth}>
//                         <div className={Styles.welcome}>
//                             <div className={Styles.plus}>
//                                 <h1>+</h1>
//                             </div>
//                             <h3>Welcome back.</h3>
//                         </div>
//                         <div className={Styles.choose}>
//                             <select>
//                                 <option >Individual/Corporate*</option>
//                                 <option  value={individual} name="individual" onChange={individualHandler()}>Individual</option>
//                                 <option  value={coorporate} name="coorporate" onChange={coorporateHandler()}>Coorporate</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//         </div>
//     )
// }
// export default Login;