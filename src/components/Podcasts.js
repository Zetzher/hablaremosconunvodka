import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Introduccion from "../assets/podcasts/intro_hablaremos_vodka.mp3";

let Podcasts = () => {
  
  return (
    <>
    <Link to={"/"} className="volver-link">Volver</Link>
      <div className="podcasts-container">
        <div className="podcasts-position">
          <h3 className="title-temporada">Introducción</h3>
          <ReactAudioPlayer src={Introduccion} controls volume={1} />
        </div>
        <div className="podcasts-position">
          <h3 className="title-temporada">Temporada 1</h3>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
