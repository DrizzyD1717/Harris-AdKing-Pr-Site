import React from "react";
import "./hero.css";

import square from "../../assets/square.png";
import circle from "../../assets/circle.png";
import polygon from "../../assets/polygon.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="userLogo">
        <img src={square} alt="" className="square" />
        <img src={circle} alt="" className="circle" />
        <img src={polygon} alt="" className="polygon" />
      </div>
      <div className="about" id="about">
        <h1>Hi, I am Harris AdKing</h1>
        <p>
          I am driven by a passion for crafting unforgettable experiences that
          leave a lasting impression. With a commitment to innovation and
          creativity, I strive to bring fresh ideas to every event I promote. My
          work is grounded in building meaningful connections between people and
          brands, creating moments that resonate long after the event is over.
        </p>
      </div>
    </div>
  );
};

export default Hero;
