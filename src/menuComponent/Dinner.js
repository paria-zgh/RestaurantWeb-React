import React from "react";
import "../Css/Menu.css";
import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import statrter2 from "../assets/starterImg/starter1.png"; 
import statrter3 from "../assets/starterImg/starter2.png"; 
import statrter1 from "../assets/starterImg/starter3.png"; 
import statrter4 from "../assets/starterImg/starter4.png"; 
import statrter5 from "../assets/starterImg/starter5.png"; 
import statrter6 from "../assets/starterImg/starter6.png"; 
import { Col, Container, Row,Modal} from "react-bootstrap";
export const Dinner=()=>{
  const [show, setShow] = useState(false);
  const [index,setIndex]=useState(0);
  const image=[statrter1,statrter2,statrter3,statrter4,statrter5,statrter6];
  const handleShow = (e) => {setShow(true);setIndex(e)};
  const handleClose = () =>{setShow(false)} 
  const righBtn=()=>{
    if(index<image.length -1){
      setIndex(index+1)
    }if(index===image.length-1){
      setIndex(0)
    }
  }
  const leftBtn=()=>{
    if(index>0){
      setIndex(index-1)
    }if(index===0){
      setIndex(image.length-1)

    }
  }
    return(
        <>
        <Container>
                <p>menu</p>
                <h4 style={{color:"darkred",padding:"0px 0px 40px 0"}}>
                    Dinner
                </h4>
            <Row >
                <Col md={12} lg={4}  xs={12}  onClick={()=>handleShow(0)}>
                <div style={{margin:"0.5px"}} className="starterCol">
                <img  src={statrter1} width={"100%"} style={{padding:"10px"}}/>
                <h4 style={{paddingTop:"30px"}}>
                 Magnam Tiste
                </h4>
            <p>
            Lorem, deren, trataro, filede, nerad
            </p>
            <p style={{color:"red"}}>$3.5 </p> 
                </div>
                          
                </Col>
                <Col md={12} lg={4}  xs={12}  onClick={()=>handleShow(1)}>
              <div style={{margin:"0.5px"}} className="starterCol">
              <img alt="DinnerImage" src={statrter2} width={"100%"} style={{padding:"10px"}}/>
                <h4 style={{paddingTop:"30px"}}>Magnam Tiste</h4>
            <p>
            Lorem, deren, trataro, filede, nerad
            </p>
            <p style={{color:"red"}}>$7.95</p>
              </div>
                </Col>
                <Col md={12} lg={4}  xs={12}  onClick={()=>handleShow(2)}>
              <div style={{margin:"0.5px"}} className="starterCol">
              <img alt="DinnerImage" src={statrter3} width={"100%"} style={{padding:"10px"}}/>
              <h4 style={{paddingTop:"30px"}}>
              Magnam Tiste
              </h4>
              <p>
              Lorem, deren, trataro, filede, nerada
              </p>
              <p style={{color:"red"}}>$4.35 </p>
              </div>
                </Col>
            </Row>
            <Row>
            <Col md={12} lg={4}  xs={12}  onClick={()=>handleShow(3)}>
                <div style={{margin:"0.5px"}} className="starterCol">
                <img alt="DinnerImage" src={statrter4} width={"100%"} style={{padding:"10px"}}/>
                <h4 style={{paddingTop:"30px"}}>
                 Magnam Tiste
                </h4>
            <p>
            Lorem, deren, trataro, filede, nerad
            </p>
            <p style={{color:"red"}}>$4.39 </p>                    
                </div>
                </Col>
                <Col md={12} lg={4} xs={12}  onClick={()=>handleShow(4)}>
              <div style={{margin:"0.5px"}} className="starterCol">
              <img alt="DinnerImage" src={statrter5} width={"100%"} style={{padding:"10px"}}/>
                <h4 style={{paddingTop:"30px"}}>Magnam Tiste</h4>
            <p>
            Lorem, deren, trataro, filede, nerad
            </p>
            <p style={{color:"red"}}>$5.95</p>
              </div>
                </Col>
                <Col md={12} lg={4} xs={12}   onClick={()=>handleShow(5)}>
              <div style={{margin:"0.5px"}} className="starterCol">
              <img alt="DinnerImage" src={statrter6} width={"100%"} style={{padding:"10px"}}/>
              <h4 style={{paddingTop:"30px"}}>
              Magnam Tiste
              </h4>
              <p>
              Lorem, deren, trataro, filede, nerada
              </p>
              <p style={{color:"red"}}>$6.55 </p>
              </div>
                </Col>
             
            </Row>
        </Container>
          <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="fullscreen-modal"
        backdropClassName="custom-backdrop"
        >
        <Modal.Body className="text-center" style={{ padding: "0", backgroundColor: "transparent" }}>
            <img alt="DinnerImage"
              src={image[index]}
              className="img-fluid"
              style={{ backgroundColor: "transparent", padding: "0", margin: "0" }}
            />
          
        </Modal.Body>
        <button className="nav right" onClick={righBtn}> <TiChevronRightOutline/>
          </button>
          <button className="nav left" onClick={leftBtn}><TiChevronLeftOutline/>
            </button>
      </Modal>


    </>
  );
};