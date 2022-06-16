import React from "react";
import { Navbar,ListGroup, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import {Button} from '@mui/material'
// import {Link} from 'react-router-dom'
import logo from "../../assets/images/CTSLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

function Navigation() {
  return (
    // <main className="header">

   
    <Navbar bg="light " className="navbar_ d-block" >
      <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div>

      <ListGroup as='ul' >
      <ListGroup.Item as='li'><NavLink to="/view"> <i class="fa-solid fa-user"></i> <span> Employee  </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to="/view/department"><i class="fa-solid fa-users"></i> <span> Departments </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to="/view/taxes"><i class="fa-solid fa-database"></i> <span> Taxes </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to="/view/menu"><i class="fa-solid fa-bars"></i> <span> Menues </span> </NavLink></ListGroup.Item>
        {/* <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item>
        <ListGroup.Item as='li'><NavLink to=""><i className="fa-solid fa-house-chimney"></i> <span> Demo </span> </NavLink></ListGroup.Item> */}
        {/* <ListGroup.Item as='li'><NavLink to="/view/one"><i className="fa-solid fa-house-chimney"></i> <span> One </span> </NavLink></ListGroup.Item> */}
      </ListGroup>
    </Navbar>
    // </main>
  );
}

export default Navigation;
