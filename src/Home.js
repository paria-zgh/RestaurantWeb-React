import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import FoodAnimation from "./FoodAnimation";
import { useRef,useEffect } from "react";
import "./Css/App.css";
export const Home=()=>{
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
        <Container  className="home" fluid>
            <Row>
        <Col md={{span:5,offset:1}} sm={11} xs={11} style={{padding:"30px",paddingTop:"7rem"}} className="card" ref={(e)=>cardsRef.current[0]=e}>
      <h2 style={{textAlign:"left"}}>
            <strong >
            Enjoy Your Healthy
             Delicious Food
            </strong>
      </h2>
    <p className='textHome'>
    "<span style={{color:"darkred",fontWeight:"bold"}}> Welcome to Pz Restaurant</span> , where culinary excellence meets a warm, inviting atmosphere.
     Enjoy a diverse menu crafted with fresh, locally sourced ingredients.
      Whether you're here for a casual meal or a special celebration,
      we promise a dining experience you'll cherish. 
    Visit us today and indulge in exceptional flavors!"
    </p>
</Col>
<Col md={6} sm={12} xs={12} className="foodAnimation" ref={(e)=>cardsRef.current[1]=e} >
<FoodAnimation/>
</Col>
            </Row>          
        </Container>
    )
}