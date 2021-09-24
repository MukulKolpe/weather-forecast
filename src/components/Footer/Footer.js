import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        &copy;
        <a
          href="https://github.com/MukulKolpe"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          Mukul Kolpe
        </a>
      </p>
    </div>
  );
};
export default Footer;
