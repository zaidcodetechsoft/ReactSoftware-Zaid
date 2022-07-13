import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./UserProfile.css";
import Logo from "../../assets/images/CTSLogo.png";
import axios from 'axios';

function UserProfile({setLoginUser}) {

  const navigate = useNavigate()
  const [user , setUser] = useState({
      email:"",
      password:""

  })
  const handleChange = (e) =>{
      const { name, value } = e.target
      setUser({
          ...user,
          [name]:value
      })
  }
  const login = ()=>{
    const { email ,password} = user
    if(email){
      if(password){
        axios.post('http://localhost:4000/api/login', user).then((res)=>{
            setLoginUser(res.data.user)
            navigate("/dashboard")
            alert(res.data.message)
        })
      }else{
        alert("Please User Password!...")
        navigate("/")  
      }
    }else{
      alert("Please User Name!...")
      navigate("/")
    }
}


  return (
    <>

    <main className="main_user2">
      <div className="login_form1  ">
      <Alert className="text-center fs-4 m-0   alertt">
            <img src={Logo} style={{width:'100%'}} alt="Logo Will Here"/>
          </Alert>
        <Form className="form py-3 px-4 ">

          <div className="mt-2 mb-5">
          
          <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="text" value={user.email} placeholder="Email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-2 " controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" value={user.password} placeholder="Password" onChange={handleChange}/>
            </Form.Group>
            </div>
            <Button className="form_btn mt-2 w-100" type="submit" onClick={login}>
            Log In
          </Button>
          <div className="message text-center mt-4">
          <p>
            Forgot Password? <NavLink to="/home" className="mx-2">
            Click Here
            </NavLink>
          </p>
          </div>
        </Form>
      </div>
    </main>
    </>
  );
}

export default UserProfile;
