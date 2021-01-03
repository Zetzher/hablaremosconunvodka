import React from "react";
import { Link } from "react-router-dom";
import Contacto from "../components/Contacto/Contacto";
import Directo from "../components/Directo/Directo";

let LandingPage = () => {
  return (
    <>
      <div className="landing-position">
        <Link to="/podcast" className="title-podcasts">
          <h3>Podcasts</h3>
        </Link>
        <div className="container-landing">
          <h1 className="title-landing">
            HABLAREMOS <br />
            CON UN <br />
            VODKA
          </h1>
          <span className="span-borde-separador"></span>

          <h2 className="subtitle-landing">
            Julián Abasolo <br /> &
            <br />
            Ilya Mitin
          </h2>
          <Directo />
        </div>

        <Contacto />
      </div>
    </>
  );
};

export default LandingPage;
