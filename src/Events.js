import React, { useState, useEffect, useRef } from "react";
import "./Css/Events.css";
import { Col, Container, Row } from "react-bootstrap";
import birthday from "./assets/Events/birthday.jpg";
import wedding from "./assets/Events/wedding.jpg";
import custom from "./assets/Events/custom.jpg";
import dinner from "./assets/Events/dinner (2).jpg";
import friend from "./assets/Events/friend.jpg";
import valentine from "./assets/Events/valentine.jpg";
const cards = [
  { id: 1, img: birthday, text: "Birthday Parties" },
  { id: 2, img: wedding, text: "Wedding Parties" },
  { id: 3, img: custom, text: "Custom Parties" },
  { id: 4, img: dinner, text: "Private Dinner" },
  { id: 5, img: friend, text: "Friendly Meeting" },
  { id: 6, img: valentine, text: "Valentine Day" },
];
export const Events = () => {
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const [cardsToShow, setCardsToShow] = useState(3);
  const cardsRef=useRef([]);
  useEffect(() => {
 const handleScroll=()=>{
  cardsRef.current.forEach((card)=>{
    if(card){
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight=window.innerHeight;
      if(cardPosition<windowHeight-50){
        card.classList.add("in-view");
      }
    }
  })
 }
 window.addEventListener("scroll",handleScroll);
 handleScroll();
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth < 768  ? 1 : 3);
    };
    const interval = setInterval(() => {
      setVisibleCards((prev) => {
        const nextIndex = (prev[prev.length - 1] + 1) % cards.length;
        return [...prev.slice(1), nextIndex];
      });
    }, 3000);
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () =>{ window.removeEventListener("resize", updateCardsToShow);
    clearInterval(interval);
     window.removeEventListener("scroll",handleScroll);  
  };
  }, []);
  return (
    <Container fluid>
      <Row      
        className="eventsAnimation" 
        ref={(e)=>cardsRef.current[0]=e}
      >
        <div style={{margin:"80px 0 40px 0 "}}>
        <h4>
         <span style={{color:"darkred"}}> EVENTS</span> IN PZ RESTAURANT
        </h4>
        </div>
        {visibleCards.slice(0, cardsToShow).map((index) => (
          <Col key={cards[index].id} md={4} className="colEvents p-0">
            <img
              height="100%"
              width="100%"
              className="imgStyle"
              src={cards[index].img}
            />
            <div className="overlay">
              <h3>{cards[index].text}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};