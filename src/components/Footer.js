import React from "react";
import InstagramLogo from "../assets/images/instagram_logo.png";
import TwitterLogo from "../assets/images/twitter_logo.png";

let Footer = () => {
  return (
    <>
      <footer>
        <h3>Redes Sociales</h3>
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
        </span>
        <h4>You now</h4>
      </footer>
    </>
  );
};

export default Footer;
