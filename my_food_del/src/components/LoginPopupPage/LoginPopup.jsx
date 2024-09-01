import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../image/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currentState, setCurrentState] = useState("LogIn")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">

          <h2>{currentState} </h2>
          {/* iska matlab hy k jab mai is cross pe click kro toh ye signin close hojaye */}
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">

          {currentState === "LogIn" ? <></> : <input type="text" placeholder='Enter your name' required />}
          <input type="email" placeholder='Enter your email' required />
          <input type="password" placeholder='Enter your password' required />
        </div>
        {/* is mai ye bataya gaya h k agr currentState signup h toh create account hojaye nhi toh login hojaye but is
         mai bydefault logIn h is liye login ka button show horaha h or agr create account pe click hoga toh phir is mai Signup show hoga*/}

        <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {/* is mai agr logIn h toh  Create a new account ? yeh msg show hoga nhi toh agr account h already toh login hoga*/}
        {currentState === "LogIn" ? <p>Create a new account ? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
          : <p>Already have an account ? <span onClick={() => setCurrentState("LogIn")}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
