import React from "react";
import "./Css/Footer.css";
import { Container, Row,Col } from "react-bootstrap";
import { IoLocationOutline,IoCallOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
export const Footer=()=>{
    return(
    <Container fluid>
<Row className="rowContainer">
    <Col lg={{span:2,offset:1}}>
        <div  className="divFooter">
        <IoLocationOutline className="iconFooter"/>
          <div className="textFooter">
             <h5 className="title">
              Address
             </h5>
             <p>
             A108 Adam Street
             New York, NY 535022
             </p>
          </div>
        </div>
    </Col>
    <Col lg={{span:3}}>
    <div  className="divFooter">
    <IoCallOutline className="iconFooter"/>
          <div className="textFooter">
             <h5 className="title">
              Contact
             </h5>
             <p>
            <b>Phone:</b>+21 5589 55488 55 <br/>
            <b className="fw-bold">Email:</b>Pz.Restaurant@yahoo.com
             </p>
          </div>
        </div> 
    </Col>
    <Col lg={{span:3}} >
    <div  className="divFooter">
    <IoMdTime className="iconFooter"/>
          <div className="textFooter">
             <h5 className="title">
              Opening Hours
             </h5>
             <p>
             <b>Mon-Sat:</b> 11AM - 23PM<br/>
              <b>Friday: </b>Closed
             </p>
          </div>
        </div>
     </Col>
    <Col lg={{span:3}}>
    <div  className="divFooter">
          <div className="textFooter">
             <h5 className="title">
              Follow Us
             </h5>
             <p>
                <a href="https://www.whatsapp.com/" target="_blank">
             <FaWhatsapp className="iconFollow" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
             <RiFacebookCircleLine className="iconFollow"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
             <FaInstagram className="iconFollow"/>
                </a>
                <a href="https://twitter.com/" target="_blank">
             <SlSocialTwitter className="iconFollow"/>
                </a>
             </p>
          </div>
        </div>  
   </Col>
</Row>
    </Container>)
}