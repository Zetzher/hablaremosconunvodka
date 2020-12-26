import React from "react";
import { Link } from "react-router-dom";
import Contacto from "../components/Contacto";
import Directo from "../components/Directo";
import MarcoMadera from "../assets/images/pngwing.com.png";
let LandingPage = () => {
  return (
    <>
      <div className="container-landing">
        <h1 className="title-landing">
          HABLAREMOS <br />
          CON UN <br />
          VODKA
        </h1>
        <span className="span-borde-separador"></span>
        
        <h2 className="subtitle-landing">Julián Abasolo <br/> <span id="simbolo-container-landing">&</span> <br/>Ilya Mitin</h2>
        <Link to="/podcast" className="title-podcasts">
          <h3>Podcasts</h3>
        </Link>
        <img src={MarcoMadera} className="background-image-directo" />
        <Directo />
        <Contacto />
      </div>
    </>
  );
};

export default LandingPage;
