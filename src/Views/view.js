import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from './EmployeeProfile/employeeProfile'
import Department from './Departments/department'
import Taxes from "./Taxes/taxes";
import Menu from "./Menues/menu";
import Navigation from '../Containers/Header/Header'
import NavigationTop from '../Containers/HeaderTop/headerTop'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./view.css"
// import "bootstrap"


function View() {

  return (

    <div className="view ">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">
            <Navigation />
            <NavigationTop />
            {/* <Home />
            <Routes>
              <Route path="/view" element={<Home />} />
              <Route path="/view/department" element={<Department />} />
              <Route path="/view/taxes" element={<Taxes />} />
              <Route path="/view/menu" element={<Menu />} />
            </Routes> */}
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default View;
