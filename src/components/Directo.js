import React from "react";
import { Link } from "react-router-dom";

let Directo = () => {
  let live = false;

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/_Ad6F64LKI0",
      title: "Directo",
    },
  ];

  return (
    <>
      <div className="container-live">
        {live ? (
          <>
            {/* <h3 className="title-live">ON</h3> */}
            {imagen.map((item) => {
              // Es necesario colocar una 'key' a partir de la versión de React JS 16
              // colocamos el objeto 'id: 1' en <div key={ item.id

              return (
                <div>
                  <a href="https://youtu.be/_Ad6F64LKI0" style={{textDecoration: 'none', color: '#ed630a', fontSize: 20, marginBottom: 20}}>Youtube</a>
                  <div
                    key={item.id}
                    className="embed-responsive embed-responsive-4by3"
                  >
                    <iframe
                      className="embed-responsive-item"
                      style={{border: 'none', width: 260}}
                      src={item.url}
                      title={item.title}
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </>
        ) : <h4 className="title-off-live">Proximo Directo<br/>29 de Diciembre<br/>22:00</h4>}
      </div>
    </>
  );
};

export default Directo;
