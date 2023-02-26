import React from 'react'
import logoFacebook from '../images/logo-facebook.png';
import logoLinkedin from '../images/logo-linkedin.png';
import logoGmail from '../images/logo-gmail.png';


function SignIn() {
  return (
    <div className="SignIn-container">
        <div className="text-left-SignIn">
           <h3 className="Trestle-logo">TRESTLE</h3>
           <div className="text-SignIn-1">Sign in to Trestle</div>
           <div className="circle-container">
             <div className="circle-1"><img className="circle-1-logo" src={logoFacebook} alt="logo-facebook" /></div>
             <div className="circle-2"><img className="circle-2-logo" src={logoLinkedin} alt="logo-linkedin" /></div>
             <div className="circle-3"><img className="circle-3-logo" src={logoGmail} alt="logo-gmail" /></div>
           </div>
           <div className="text-SignIn-2">or use your email account</div>
           <div className="title-SignIn-1">Email Address</div>
           <input className="SignIn-box-1" type="text" placeholder="Enter Email Address" required></input>
           <div className="title-SignIn-3">Password</div>
           <input className="SignIn-box-2" type="password" placeholder="Enter Password" required></input>
           <div class="title-SignIn-4"><a href="#">Forgot password?</a></div>
           <button className="button-login-SignIn">Log in</button>
        </div>
        <div className="text-right-SignIn">
            <div className="text-right-SignIn-1">Hello There!</div>
            <div className="text-right-SignIn-2">Enter your personal details and start your journey with us.</div>
            <button className="text-right-SignIn-3">Log in</button>
        </div>
     
    </div>
  )
}

export default SignIn

