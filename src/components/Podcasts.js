import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Introduccion from "../assets/podcasts/intro_hablaremos_vodka.mp3";
import Temporada1_01 from "../assets/podcasts/Temporada1/01x01.mp3";
import Temporada1_02 from "../assets/podcasts/Temporada1/01x02.mp3";

let Podcasts = () => {
  return (
    <>
      <div className="podcasts-container">
        <Link to={"/"} className="volver-link">
          Volver
        </Link>
        <div className="podcasts-position">
          <h3 className="title-temporada">Introducción</h3>
          <ReactAudioPlayer src={Introduccion} controls volume={1} />
        </div>
        <div className="podcasts-group-position">
          <div className="podcasts-position">
            <h3 className="title-temporada">Temporada 1</h3>
            <h4>01x01 El sexo, esa gran incógnita</h4>
            <ReactAudioPlayer src={Temporada1_01} controls volume={1} />
            <h4>01x02 Historias Oscuras y Deseos Ocultos</h4>
            <ReactAudioPlayer src={Temporada1_02} controls volume={1} />
          </div>
          {/* <div className="podcasts-position">
          <h3 className="title-temporada">Temporada 2</h3>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Podcasts;
