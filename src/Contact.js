import React from "react";
import { Map } from "./Map";
import { Col, Container, Row } from "react-bootstrap";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useRef,useEffect } from "react"
import "./Css/Contact.css";
export const Contact = () => {
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
  return (
<Container className="text-center" fluid>
  <div className="divAnimation" ref={(e)=>cardsRef.current[0]=e}>
      <p>Contact</p>
      <h4>
        NEED HELP? <span style={{ color: "darkred" }}>CONTACT US</span>
      </h4>
   </div>
   <div className="divMap" ref={(e)=>cardsRef.current[6]=e} >
      <Map />
   </div>
      <Row>
        <Col lg={{ span: 5, offset: 1 }} md={12} >
          <div className="divContact"  ref={(e)=>cardsRef.current[1]=e}>
            <div className="divIcon">
              <IoLocationOutline className="icon"/>
            </div>
            <div className="divText">
              <h5 className="fw-bold">Address</h5>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
        </Col>
        <Col lg={5} md={12}>
          <div className="divContact" ref={(e)=>cardsRef.current[2]=e} >
            <div className="divIcon">
              <IoCallOutline className="icon"/>
            </div>
            <div className="divText">
              <h5 className="fw-bold">Call Us</h5>
              <p>+21 5589 55488 55</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 5, offset: 1 }} md={12}>
          <div className="divContact" ref={(e)=>cardsRef.current[3]=e}>
            <div className="divIcon">
              <MdOutlineMailOutline className="icon"/>
            </div>
            <div className="divText">
              <h5 className="fw-bold">Email Us</h5>
              <p>Pz.Restaurant@yahoo.com</p>
            </div>
          </div>
        </Col>
        <Col lg={5} md={12}>
          <div className="divContact" ref={(e)=>cardsRef.current[4]=e}>
            <div className="divIcon">
              <IoMdTime className="icon"/>
            </div>
            <div className="divText">
              <h5 className="fw-bold">Opening Hours</h5>
              <p>Mon-Sat: 11AM - 23PM; Friday: Closed</p>
            </div>
          </div>
        </Col>
      </Row>
        <Row >
          <Col lg={{span:10,offset:1}} >
      <form className="rowContact" ref={(e)=>cardsRef.current[5]=e}>
          <Row style={{ width: "100%", margin: "20px 5px 5px 5px" }}>
            <Col lg={6} md={12}>
              <input type="text" placeholder="Your Name" required />
            </Col>
            <Col lg={6} md={12}>
              <input type="email" placeholder="Your Email" required />
            </Col>
          </Row>
          <Row style={{ width: "100%", margin: "5px" }}>
            <Col lg={12}>
              <input type="text" placeholder="Subject" />
            </Col>
          </Row>
          <Row style={{ width: "100%", margin: "5px 5px 0px 5px" }}>
            <Col lg={12}>
              <input type="text" placeholder="Message" id="colInput" required />
            </Col>
          </Row>
          <button type="submit" className="btnSubmit" >
            Send Message
          </button>
      </form>
          </Col>
        </Row>
    </Container>
  );
};
