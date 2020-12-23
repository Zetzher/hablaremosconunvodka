import React from "react";

let Directo = () => {
  let live = false;

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/mklx0E4gXyU",
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
                  <div
                    key={item.id}
                    className="embed-responsive embed-responsive-4by3"
                  >
                    
                    <iframe
                      className="embed-responsive-item"
                      style={{border: 'none'}}
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
