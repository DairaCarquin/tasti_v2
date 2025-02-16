import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../../styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      <li>
        <a href="#"><FaFacebookF /></a>
      </li>
      <li>
        <a href="#"><FaInstagram /></a>
      </li>
      <li>
        <a href="#"><FaTwitter /></a>
      </li>
      <li>
        <a href="#"><FaLinkedinIn /></a>
      </li>
    </ul>
  );
};

export default SocialIcons;
