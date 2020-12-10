import React from "react";
import { Link } from "react-router-dom";
import Contacto from "../components/Contacto";
import ReactAudioPlayer from "react-audio-player";
import IntroAudio from "../assets/musica/efecto_sonido_neon.mp3";

let LandingPage = () => {
  return (
    <>
      {/* <ReactAudioPlayer src={IntroAudio} autoPlay volume={0.3} /> */}
      <div className="container-landing">
        <h1 className="title-landing">
          HABLAREMOS <br />
          CON UN <br />
          VODKA
        </h1>
        <h2 className="subtitle-landing">Julián Abasolo & Ilya Mitin</h2>
        <div className="container-live">
          <h3 className="title-live">ON</h3>
          
        </div>
        <Link to="/podcast">
          <h3 className="title-podcasts">Más Podcasts</h3>
        </Link>
        <Contacto />
      </div>
    </>
  );
};

export default LandingPage;
