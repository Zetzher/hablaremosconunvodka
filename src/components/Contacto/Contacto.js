import React from "react";
import InstagramLogo from "../../assets/images/logo_instagram.png";
import TwitterLogo from "../../assets/images/logo_twitter.png";
import Youtube from "../../assets/images/logo_youtube.png";
import "./contacto.css";

let Footer = () => {
  return (
    <>
      <div className="contacto-container">
        <h3>Contacto</h3>
        <span>
        <a href="https://www.instagram.com/hablaremosconunvodka">
            <img
              src={InstagramLogo}
              alt="logo-instagram"
              className="logo-redes-sociales"
            />
          </a>
          <a href="https://twitter.com/hablaremosvodka">
            <img
              src={TwitterLogo}
              alt="logo-instagram"
              className="logo-redes-sociales"
            />
          </a>
          <a href="https://www.youtube.com/channel/UC1qZ8wODJGoJjOk6TO-1yHw">
            <img
              src={Youtube}
              alt="logo-younow"
              className="logo-redes-sociales"
            />
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
