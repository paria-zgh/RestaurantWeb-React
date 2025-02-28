import React from 'react';
import Food from "./assets/hero-img.png";
import "./Css/FoodAnimation.css";
function FoodAnimation() {
  return (
    <div className="image-container" >
      <img
      src={Food}
        alt="Food Animation"
        className="floating-image"
      />
      </div>     
  );
}
export default FoodAnimation;
