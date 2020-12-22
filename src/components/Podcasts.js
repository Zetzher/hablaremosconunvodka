import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

let Podcasts = () => {
  return (
    <>
      <div className="podcasts-container">
        <Link to={"/"} className="volver-link">
          Volver
        </Link>
        <div className="podcasts-position">
          <h3 className="title-temporada">Introducción</h3>
          <iframe
            title="introduccion"
            id="audio_62767578"
            frameborder="0"
            allowfullscreen=""
            scrolling="no"
            height="200"
            style={{
              border: "1px solid #EEE",
              boxSizing: "border-box",
              width: "100%",
            }}
            src="https://www.ivoox.com/player_ej_62767578_4_1.html?c1=ff6600"
          ></iframe>
        </div>
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{
            position: "absolute",
            bottom: 50,
            color: "#f84620",
            fontSize: 50,
          }}
        />
      </div>
      <div className="podcasts-container">
        <div className="podcasts-group-position">
          <div className="podcasts-position">
            <h3 className="title-temporada">Temporada 1</h3>
            <article>
              <div>
                <h4>01x01 El sexo, esa gran incógnita</h4>
                <iframe
                  title="sexo, incognita"
                  id="audio_62765961"
                  frameborder="0"
                  allowfullscreen=""
                  scrolling="no"
                  height="200"
                  style={{
                    border: "1px solid #EEE",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                  src="https://www.ivoox.com/player_ej_62765961_4_1.html?c1=ff6600"
                ></iframe>
              </div>
              {/* <ReactAudioPlayer src="https://www.ivoox.com/player_ej_62668237_4_1" controls volume={1} /> */}
              <div>
                <h4>01x02 Historias Oscuras y Deseos Ocultos</h4>
                <iframe
                  title="historias, deseos"
                  id="audio_62767511"
                  frameborder="0"
                  allowfullscreen=""
                  scrolling="no"
                  height="200"
                  style={{
                    border: "1px solid #EEE",
                    boxSizing: "border-box",
                    width: "90%",
                  }}
                  src="https://www.ivoox.com/player_ej_62767511_4_1.html?c1=ff6600"
                ></iframe>
              </div>
            </article>
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
