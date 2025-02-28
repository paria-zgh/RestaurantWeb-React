import React, { useEffect, useRef } from "react";
import "./Css/Why.css";
import { Col, Container, Row } from "react-bootstrap";
export const Why = () => {
  const WhyCardRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      if (WhyCardRef.current) {
        WhyCardRef.current.forEach((card) => {
          if (card) {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 50) {
              card.classList.add("in-view");
            }
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Row>
        <div ref={(el) => (WhyCardRef.current[0] = el)} className="why" >
        <h4>
          <span style={{ color: "darkred" }}> WHY</span> CHOOSE PZ RESTAURANT
        </h4>
        </div>
        <Col
          className="WhyCard"
          lg={{ span: 3, offset: 1 }}
          md={10}
          xs={10}
          sm={10}
          ref={(el) => (WhyCardRef.current[1] = el)} // Assign ref to first card
        >
          <h4>Unmatched Ingredient Quality</h4>
          <p>
            "At PZ, we believe that great taste starts with top-quality
            ingredients. We source only the freshest and finest ingredients
            from trusted suppliers to ensure the best experience for you. From
            crisp vegetables to premium meats, everything on your plate is
            carefully selected for excellence."
          </p>
        </Col>
        <Col
          className="WhyCard"
          lg={3}
          md={10}
          xs={10}
          ref={(el) => (WhyCardRef.current[2] = el)}
        >
          <h4>Unforgettable Flavor</h4>
          <p style={{ marginTop: "38px" }}>
            "Every bite at PZ is a blend of tradition and innovation. We combine
            authentic recipes with modern culinary techniques to deliver a unique
            and extraordinary taste. Whether you love classic dishes or enjoy
            discovering new flavors, there’s always something special waiting for
            you!"
          </p>
        </Col>
        <Col
          className="WhyCard"
          md={10}
          lg={3}
          xs={10}
          ref={(el) => (WhyCardRef.current[3] = el)} 
        >
          <h4>Cozy & Friendly Atmosphere</h4>
          <p>
            "PZ is more than just a restaurant – it’s a place for special
            moments. With a warm and inviting interior, soft background music,
            and perfect lighting, we create an ideal setting for family gatherings,
            friendly meetups, or even business meetings. Here, you can relax and
            enjoy your meal in a cozy and welcoming environment."
          </p>
        </Col>
      </Row>
    </Container>
  );
};
