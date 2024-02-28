import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../logo.svg'
import logo from "../utils/Ekklêsia-web-2.webp";
import React from "react";
import { useEffect, useRef } from "react";
// import logo from '../logo-png-mini2.webp'

import "./navbar.scss";
// import { Squash as Hamburger } from "hamburger-react";
// import { Squeeze as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  let menuRef = useRef()


  const handleShowNavbar = () => {
    // début modif scroll
    // window.scrollTo(0,0)
    //fin modif scroll

    setShowNavbar(!showNavbar);
  };
  const closeAndTop = () => {
    window.scrollTo(0, 0);
    // setShowNavbar(!showNavbar);
  };
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(!open);
  // };
  useEffect(()=> {
    let handler = (e) =>{
      if(!menuRef.current.contains(e.target)){
      setShowNavbar(false)
      // console.log(menuRef.current);
        
      
    }
  };
    document.addEventListener("mousedown", handler)
  
  return()=>{
    document.removeEventListener("mousedown", handler)
  }
  });

  // const closeAndTop = () => {
  //   window.scrollTo(0, 0);
  //   setShowNavbar(!showNavbar);
  // };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
        
          <img src={logo} className="logo-1" alt="logo" />
       
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <Hamburger /> */}
            <span className="burger-icon" ref={menuRef}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={closeAndTop}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission" onClick={closeAndTop}>
                  Notre Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/methodologie" onClick={closeAndTop}>
                  Notre Méthodologie
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={closeAndTop}>
                  Nos Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/realisations" onClick={closeAndTop}>
                  Nos Réalisations
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeAndTop}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="title-container">
        <h1>Avec Ekklêsia Web, dynamisez votre vie d'église avec le Net !</h1>
      </div>
    </header>
  );
};

export default Navbar;