import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Walter from "./assets/chefs/whalter white.jpg";
import wiliam from "./assets/chefs/viliam.jpg";
import sarah from "./assets/chefs/Sarah Johnson.jpg";
import "./Css/Chefs.css";
export const Chefs = () => {
  const cardsRef=useRef([]);
  useEffect(()=>{
    const handleScroll=()=>{
   cardsRef.current.forEach((card)=>{
    if(card){
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight=window.innerHeight;
      if(cardPosition<windowHeight-50){
        card.classList.add("in-view")
      }
    }
   })
  }
  window.addEventListener("scroll",handleScroll);
  handleScroll();
return()=>{ window.removeEventListener("scroll",handleScroll)}
  },[])
  return (
    <Container>
      <Row  className="chefsAnimation" ref={(e)=>cardsRef.current[0]=e}>
        <Col md={12} sm={12}  className="text-center"  >
          <div style={{marginTop:"50px",marginBottom:"40px"}} >
          <p>Chefs</p>
          <h4>
            OUR<span style={{ color: "darkred" }}> PROFFASIONAL CHEFS</span>
          </h4>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: 0, gap: 0 }} className="chefsAnimation" ref={(e)=>cardsRef.current[1]=e}>
        <Col  md={12} lg={4}  sm={12} style={{ overflow: "hidden", position: "relative", padding: 0 }}>
         <div className="divContainer">

          <div style={{  backgroundColor:"white",borderRadius:"10px"}}>
            <img

              src={Walter}
              className="card-img-top"
              alt="Walter Image"
              width="100%"
              height="380"
              style={{ display: "block",borderRadius:"10px" }}
            />
          </div>         
          <svg
            className="position-absolute"
            viewBox="0 0 1440 320"
            width="100%"
            height="100%"
            style={{ marginTop: "-370px",marginBottom:0,paddingLeft:0}}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,170.7C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>         
          <div className="card-body text-center bg-white m-0 " style={{margin:0,padding:"35px 20px 35px 20px",color:"black"}}>
            <h5 className="card-title ">Whalter White </h5>
            <p>Master Chef</p>
            <p className="card-text fst-italic" >
            "Walter White, a master chef with unparalleled culinary skills, 
            brings his passion for food to PZ Restaurant. Known for his innovative dishes and attention to detail,
             he creates a dining experience that delights the senses and leaves guests craving more."
              </p>
          </div>
          </div>
        </Col>
        <Col  md={12} lg={4} sm={12} style={{ overflow: "hidden", position: "relative", padding: 0 }}>
       <div className="divContainer">
          <div style={{borderRadius:"10px"}}>
            <img 
              alt="Sarah Image"
              src={sarah}
              className="card-img-top"
              width="100%"
              height="380"
              style={{ display: "block",borderRadius:"10px" }}
            />
          </div>
          <svg
            className="position-absolute"
            viewBox="0 0 1440 320"
            width="100%"
            height="100%"
            style={{ marginTop: "-370px",marginBottom:0 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,170.7C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="card-body text-center bg-white m-0 "
           style={{ margin:0,padding:"35px 20px 60px 20px",marginBottom:0,color:"black"}}>
            <h5 className="card-title ">Sarah Johnson </h5>
            <p>Pattisier</p>
            <p className="card-text fst-italic" >
            She is a talented pâtissier at PZ Restaurant, 
            crafts exquisite desserts with precision and flair.
             Her creative touch and dedication to perfection make every sweet treat a masterpiece that guests savor with delight.

              </p>
          </div>
          </div>
        </Col>
        <Col md={12} lg={4} sm={12} 
        style={{  overflow: "hidden", position: "relative", padding: 0 }}>
      <div className="divContainer">
          <div style={{borderRadius:"10px"}}>
            <img alt="wiliam image"
              src={wiliam}
              className="card-img-top"
              width="100%"
              height="380"
              style={{ display: "block",borderRadius:"10px"}}
            />
          </div>
          <svg
            className="position-absolute"
            viewBox="0 0 1440 320"
            width="100%"
            height="100%"
            style={{ marginTop: "-370px",marginBottom:0 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,170.7C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="card-body text-center bg-white m-0 " 
          style={{margin:0,padding:"35px 20px 35px 20px",color:"black"}}>
            <h5 className="card-title ">Wiliam Anderson </h5>
            <p>Cook</p>
            <p className="card-text fst-italic "  >
            William Anderson, a skilled cook at PZ Restaurant, 
            brings his passion for flavorful dishes to life. 
            With his expertise in the kitchen, he consistently delivers mouthwatering meals that leave a lasting impression on every guest.
              </p>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
