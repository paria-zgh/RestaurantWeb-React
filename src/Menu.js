import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Css/Menu.css";
import { Starters } from "./menuComponent/Starters";
import { Dinner } from "./menuComponent/Dinner";
import { Lunch } from "./menuComponent/Lunch";
import { Breakfast } from"./menuComponent/Breakfast";
import { useRef,useEffect } from "react";
export const Menu=()=>{
    const [menu,setMenu]=useState("starters");
    const cardsRef = useRef([]); 
  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const cardPosition = card.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (cardPosition < windowHeight - 50) {
            card.classList.add("in-view");              
        }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return(
        <Container  fluid>
            <Row className="menuText">
                <Col md={12} sm={12} xs={12} >
                <div className="textAnimation" ref={(e)=>cardsRef.current[0]=e} >
                <p>
                    Our Menu
                </p>
                <h4>
                    CHECK OUR <span style={{color:"darkred"}}>PZ MENU
                        </span>
                </h4>
                </div>
<Row className="bgMenuBtn" ref={(e)=>cardsRef.current[1]=e}>
    <Col md={12} sm={12} xs={12}>
                <button onClick={()=>{setMenu("starters")}} className="menuBtn" >Starters</button>
                <button onClick={()=>{setMenu("breakfast")}} className="menuBtn">Breakfast</button>
                <button  onClick={()=>{setMenu("lunch")} }className="menuBtn">Lunch</button>
                <button onClick={()=>{setMenu("dinner")}} className="menuBtn">Dinner</button>
    </Col>
</Row>         
 <div className="divMenu" ref={(e)=>cardsRef.current[2]=e}>
    
               {menu==="starters"&& <div><Starters/></div>}
               {menu==="dinner" && <div><Dinner/></div>}
               {menu==="lunch" && <div><Lunch/></div>}
               {menu==="breakfast" && <div><Breakfast/></div>} 
  </div>
               
                </Col>
            </Row>
        </Container>
    )
}