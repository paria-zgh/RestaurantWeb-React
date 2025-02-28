import React from "react";
import "./Css/About.css";
import { Col, Container, Row } from "react-bootstrap";
import about from "./assets/about.jpg";
import about2 from "./assets/about-2.jpg";
import { useRef,useEffect } from "react";
export const About=({})=>{
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
        <Container className="aboutContainer"  fluid>
            <Row>
                <Col className="aboutCol1" ref={(e)=>cardsRef.current[0]=e}>
            <p>
            Abous us
            </p>
            <h4 className="fst-italic">
                LEARN MORE<span style={{color:"darkred"}}> ABOUT US</span> 
            </h4>
                </Col>
             </Row>
             <Row>
             <Col ref={(e)=>cardsRef.current[1]=e} className="aboutCol2" lg={{span:6,offset:1}} md={12} sm={12} xs={12} >
               <img src={about} style={{maxWidth:"100%"}} alt="Pz Restaurant"/> 
              <div style={{padding:"40px",fontSize:"x-large"}}>
                 <p >
                  <strong>Book Number: </strong>
                 </p>
                 <p>
                  <span style={{color:"darkred"}}>+21 5589 55488 55</span>
                 </p>
              </div>
             </Col>
               <Col lg={4} md={12} xs={12}  ref={(e)=>cardsRef.current[2]=e}  className="aboutCol2"  >
                 <Row>
                   <Col >
                   <p style={{textAlign:"left"}} >
                   At <span style={{color:"darkred"}}>Pz Restaurant</span>, 
                   we value quality and innovation in every dish we serve.
                    Our chefs are dedicated to creating a unique culinary experience that blends tradition with creativity.
                      </p>
                    <ul style={{textAlign:"left"}}>
                       <li>
                      <strong>High Quality:</strong> 
                       We use only the finest and freshest ingredients to craft our dishes.</li>
                       <li>
                      <strong>Unique Experience:</strong>
                      Every meal at our restaurant is a memorable experience.
                       </li>
                       <li>
                      <strong>Creative Cooking:</strong>
                        Our menu stands out with a creative blend of flavors and ingredients.
                       </li>
                    </ul>   
                       <p style={{textAlign:"left"}}>
                       Our commitment to excellence is evident in every bite. 
                       We strive to make every dining experience unforgettable, ensuring each guest feels like a member of our family.
                       </p>
                     </Col>
                  </Row>
                  <Row >
                   <Col  style={{padding:0}}  ref={(e)=>cardsRef.current[3]=e} className="aboutCol3">
                   <img  alt="Pz Food" src={about2} style={{width:"100%",height:"50vh"}}/>
                   </Col>
                  </Row>                
              </Col>       
            </Row>            
      </Container>
    )
}