import React from "react";
// import Home from "../Home/index";
// import Dashboard from "../Dashboard/index";
// import UserProfile from "../UserProfile/UserProfile";
// import Reports from "../Reports/index";
import Logo from "../../assets/Logo.jpg"
import "./view.css"
// import { Home, BarChartOutline, AccessibilityOutline, ReaderOutline } from 'react-ionicons'
// import UserProfile from "../UserProfile/UserProfile";
import UserProfile2 from "../UserProfile/UserProfile2";
import UserProfile3 from "../UserProfile/UserProfile3";



function view() {
  return (
    <section className="navbar">
      <div className="row">
        <div className="col">
          {/* <div className="img_sec">
          <img src = {Logo}  alt="" />
          </div>
          <ul>
          <Home color={'#00000'} height="15px" width="50px" className = "icons_select"/><li className="li_line">Home</li>
          <BarChartOutline color={'#00000'} height="15px" width="50px" className = "icons_select"/> <li className="li_line">Dashboard</li>
          <AccessibilityOutline color={'#00000'} height="15px" width="50px" className = "icons_select"/> <li className="li_line">UserProfile</li>
          <ReaderOutline color={'#00000'} height="15px" width="50px" className = "icons_select"/><li className="li_line">Reports</li>
          </ul> */}
          {/* <UserProfile /> */}
          {/* <UserProfile2 /> */}
          <UserProfile3 />
        </div>
      </div>
    </section>
  );
}

export default view;
