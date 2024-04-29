import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/img1.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content"> 
    <p> Hi, I'M A FREELANCER. </p>
    <h1> REACT Developer. </h1>
    <div>
        <Link to="/project"
        className="btn">Projects</Link>
         <Link to="/contact"
        className="btn btn-ligth">Contact</Link>
    </div>
    </div>
    </div>
  )
};

export default HeroImg;