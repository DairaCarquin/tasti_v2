import React from "react";
import SocialIcons from "./Home/SocialIcons";
import "../styles/home.css";

import emailIcon from "../assets/img/email 1.png";
import webIcon from "../assets/img/global 1.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="empresa">
        <h2>TASTY</h2>
        <div className="correo">
          <img src={emailIcon} alt="Email" />
          <span>tasty.fastfood@gmail.com</span>
        </div>
        <div className="web">
          <img src={webIcon} alt="Web" />
          <span>www.tasty.com</span>
        </div>
      </div>
      <div className="platos">
        <h4>Nuestro menú</h4>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </div>
      <div className="info">
        <h4>Información</h4>
        <span>About us</span>
        <span>Testimonial</span>
        <span>Event</span>
      </div>
      <div className="paginas">
        <h4>Links</h4>
        <span>Servicios</span>
        <span>Support</span>
        <span>Conditions</span>
      </div>
      <div className="footer">
        <SocialIcons />
      </div>

    </footer>
  );
};

export default Footer;
