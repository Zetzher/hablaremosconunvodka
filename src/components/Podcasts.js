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
        <iframe src="https://open.spotify.com/embed/playlist/6k003jNUMI34aaQZjzf9j7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </div>
    </>
  );
};

export default Podcasts;
