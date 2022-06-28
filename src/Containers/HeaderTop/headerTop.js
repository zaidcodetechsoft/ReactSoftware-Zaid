import React from "react";
import { Navbar,Nav, NavDropdown, Container, Col, Row } from 'react-bootstrap';
// import { NavLink } from "react-router-dom";
// import {Button} from '@mui/material'
// import {Link} from 'react-router-dom'
// import logo from "../../assets/images/logo.png"
// import logo from "../../assets/images/CTSLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './headerTop.css'

function NavigationTop() {
  return (
    <main className="header_top">

<Navbar  className="navbar">
        {/* <Container fluid className="mx-2 d-flex justify-content-between"> */}
        <Container fluid className="mx-2">
          {/* <h3 className="text-white fs-5">Hello World</h3> */}
          <Nav className="gap-4">
          <Nav.Link href="#link">New</Nav.Link>
          <Nav.Link href="#link">Edit</Nav.Link>
          <Nav.Link href="#link">Update</Nav.Link>
          </Nav>
          {/* <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div> */}
          {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
        </Container>
      </Navbar>
      
     </main>
  );
}

export default NavigationTop;
