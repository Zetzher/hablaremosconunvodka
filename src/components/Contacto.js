import React from "react";
import InstagramLogo from "../assets/images/logo_instagram.png";
import TwitterLogo from "../assets/images/logo_twitter.png";
import TwitchLogo from "../assets/images/logo_twitch.png";
import Younow from "../assets/images/logo_younow.jpg";
import Youtube from "../assets/images/logo_youtube.png";

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
          <a href="https://www.twitch.tv/hablaremosconunvodka">
            <img
              src={TwitchLogo}
              alt="logo-twitch"
              className="logo-redes-sociales"
            />
          </a>
          <a href="https://www.younow.com/hablaremosconunvodka">
            <img
              src={Younow}
              alt="logo-younow"
              className="logo-redes-sociales"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCS6kgylAP4D5mlAxvzbSeJg">
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
