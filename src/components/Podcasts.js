import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

let Podcasts = () => {
  
  return (
    <>
    <Link to={"/"} className="volver-link">Volver</Link>
      <div className="podcasts-container">
        <div className="podcasts-position">
          <h3 className="title-temporada">Introducción</h3>
        </div>
        <div className="podcasts-position">
          <h3 className="title-temporada">Temporada 1</h3>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
