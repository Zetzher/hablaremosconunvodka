import React from "react";

let IframeYoutube = (props) => {
  console.log(
    props.src.map((data) => console.log(data)),
    "props"
  );

  return (
    <>
      {props.src.map((data) => (
        <>
         <div className="podcasts-position">
          <iframe
            title={data.title}
            src={data.src}
            width={data.width}
            height={data.width}
            frameborder={data.frameborder}
            allowtransparency={data.allowtransparency}
            allow={data.allow}
          />
          </div>
        </>
      ))}
    </>
  );
};

export default IframeYoutube;
