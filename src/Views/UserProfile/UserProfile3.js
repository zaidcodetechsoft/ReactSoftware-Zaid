import React from 'react'
import "./UserProfile3.css"

function UserProfile3() {
  return (
    <>
    <div className="background">
      <div className="shape" />
      <div className="shape" />
    </div>
    <form>
      <h1 className="h1_login">LOGIN</h1>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />
      <button className='btn_label'>Log In</button>
      <p className="p_text">
        Forgot Password? <a href="#">Click here</a>
      </p>
    </form>
  </>
  )
}

export default UserProfile3