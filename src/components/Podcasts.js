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
          <iframe
            title="introduccion"
            src="https://open.spotify.com/embed-podcast/episode/7K8sBCrsVQz9T5cwj01950"
            width="250"
            height="300"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <iframe
            title="01x01"
            src="https://open.spotify.com/embed-podcast/episode/08kwLKdVA7XLU9pHyLBLoJ"
            width="250"
            height="300"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <iframe
            title="01x02"
            src="https://open.spotify.com/embed-podcast/episode/1KYiXSCZ9lESrcyzDBTnTn"
            width="250"
            height="300"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <iframe
            title="01x03"
            src="https://open.spotify.com/embed-podcast/episode/5nB8X9CoNrlrEBMIuoi7H5"
            width="250"
            height="300"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
      </div>
    </>
  );
};

export default Podcasts;
