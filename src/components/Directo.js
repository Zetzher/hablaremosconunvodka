import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

let Directo = () => {
    let live = false;

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/hvoA85_AC2o",
      title: "Directo",
    },
  ];

  return (
    <>
      <div className="container-live">
          {live ? <> <h3 className="title-live">ON</h3>
        
        {imagen.map((item) => {
          // Es necesario colocar una 'key' a partir de la versión de React JS 16
          // colocamos el objeto 'id: 1' en <div key={ item.id

          return (
            <div
              key={item.id}
              className="embed-responsive embed-responsive-4by3"
            >
              <iframe
                className="embed-responsive-item"
                src={item.url}
                title={item.title}
              ></iframe>
            </div>
          );
        })} </> : <><h3 className="title-off-live">OFF</h3> <h3 className="title-proximo-directo">Próximo directo <br/>17/12/2020</h3></> }
        

        
      </div>
    </>
  );
};

export default Directo;
