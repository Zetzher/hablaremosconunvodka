import React from "react";

let Directo = () => {
    let live = false;

  const imagen = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/OJ9SEjCPXI8",
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
        })} </> : <><h3 className="title-off-live">OFF</h3></> }
        

        
      </div>
    </>
  );
};

export default Directo;
