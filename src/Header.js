import React, { useState } from "react";
import "./Css/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export const Header = ({ scrollToSection, activeSection,theme,setTheme }) => {
  const darkMode=()=>{
   setTheme((e)=>e==="light"? "dark":"light")
  } ;
  const navLinkStyle = {
    padding: "8px 40px",
    fontSize: "18px",
    fontWeight: "bold",
    color: theme==='light'? "black":"white",
  };
  return (
    <Navbar expand="lg">
      <Container className="navBody" 
      style={{
        backgroundColor: theme ==="light" ? "rgb(251, 251, 252)":'rgb(12, 6, 29)',
        color:theme==="light"? "rgb(12, 6, 29)":"white",
      }} fluid>
        <Navbar.Brand
          className="navBrandHeader"
          style={{
            padding: "12px 110px 12px 30px",
            fontSize: "28px",
            fontWeight: "bold",
            color: theme==="light"? "rgb(194, 8, 8)":"white",
          }}
        >
          <strong>PZ</strong> Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: "8px" }}>
          <Nav >
            {["home","about","menu","event","contact"].map((section) => (
              <Nav.Link
                key={section}
                style={navLinkStyle}
                onClick={() => {
                  scrollToSection(section);
                }}
                className={`nv ${activeSection === section ? "active" : ""}`} 
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          
            <button className="btnn d-none d-lg-block" onClick={darkMode}>
          {theme === "light" ? 
            (<div>
            <MdOutlineLightMode style={{width:"35px",height:"35px",paddingRight:"10px"}} />
            Light Mode
          </div>):(<div>
           <MdOutlineDarkMode  style={{width:"35px",height:"35px",paddingRight:"10px"}} />
            Dark Mode
          </div>)
           }
              </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
