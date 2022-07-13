import React from "react";
// import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import UserProfile from './Views/Auth/UserProfile';
import Home from './Views/EmployeeProfile/employeeProfile';
import Department from './Views/Departments/department';
import Taxes from "./Views/Taxes/taxes";
import Menu from "./Views/Menues/menu";
import Navigation from './Containers/Header/Header';
import NavigationTop from './Containers/HeaderTop/headerTop';
import CompanyProfile from './Views/Tabs/CompanyProfile/CompanyProfile';
import Clients from './Views/Tabs/Clients/Clients';
import Dashboard from './Views/Dashboard/Dashboard';
import Error from './Error'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import CompanyProfile from './Views/Tabs/CompanyProfile/CompanyProfile'
// import View from './Views/view';

function App() {
  // const [user, setLoginUser] = useState({})
  return (

    <div className="view ">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">

            {/* <CompanyProfile1 /> */}

            <Navigation />
            <NavigationTop />


            <Routes>
              {/* <Route exact path="/home" element={<Home />} /> */}
              {/* <Route exact path="/home" element={
             user && user._id ? <Home setLoginUser={setLoginUser}/> : <UserProfile setLoginUser={setLoginUser} />
            } /> */}
              {/* <Route path="/login" element={<UserProfile />} /> */}
              {/* <Route path="/login" element={<UserProfile setLoginUser={setLoginUser} />} /> */}
              {/* <Route path="/login" element={<UserProfile />} />
              <Route path="/department" element={<Department />} />
              <Route path="/taxes" element={<Taxes />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/companyProfile" element={<CompanyProfile />} />
              <Route path="*" element={<Error />} /> */}


              {/*  yahiya */} 

              <Route  path="/" element={<UserProfile />} />
            <Route  path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/department" element={<Department />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path ="/companyProfile" element={<CompanyProfile />} />
            <Route path ="/clients" element={<Clients />} />
            <Route path="*" element={<Error />} />

            </Routes>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
