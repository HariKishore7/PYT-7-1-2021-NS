import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="nav">
      <Link to="/home" className="logoname">Road Trip</Link>
      <Link to="/welcome" className="name login"><button className="btn" onClick={props.logoutUser}>Logout</button></Link>
      <Link to="/Profile" className="name profile"><button className="btn">Profile</button></Link>
      <Link to="/Cars" className="name cars"><button className="btn">Cars</button></Link>
      <Link to="/Contact" className="name contact"><button className="btn">Contact</button></Link>
      <Link to="/About" className="name about"><button className="btn">About</button></Link>
      <Link to="/home" className="name home"><button className="btn">Home</button></Link>
    </div>
  );
}
export default NavBar;