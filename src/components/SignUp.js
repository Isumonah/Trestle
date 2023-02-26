import React from 'react'

function SignUp() {
  return (
    <div className="SignUp-container">
      <div className="text-left">
        <div className="text-1">Welcome Back</div>
        <div className="text-2">To stay connected with us, kindly login to your personal account.</div>
        <button className="text-3">Log in</button>
      </div>
      <div className="text-right">
         <div className="text-right-1">Create Account</div>
         <div className="text-right-2">Enter your details to begin your journey with us.</div>
         <form>
            <div className="input-boxes">
               <div>
                <div className="title-1">Full Name</div>
                <input className="text-right-3" type="text" placeholder="Enter Full name" required></input>
                <div className="title-2">Email Address</div>
                <input className="text-right-4" type="text" placeholder="Enter Email Address" required></input>
                <div className="title-3">Password</div>
                <input className="text-right-5" type="password" placeholder="Enter Password" required></input>
                <div className="title-4">Confirm Password</div>
                <input className="text-right-6" type="password" placeholder="Re-Enter Password" required></input>
                <div className="button-submit"></div>
                <button className="SignUp-button">Sign Up</button>
               </div>
            </div>
         </form>
      </div>
    </div>
  )
}

export default SignUp
