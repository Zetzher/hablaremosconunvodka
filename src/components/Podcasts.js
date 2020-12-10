import React from "react";
import ReactAudioPlayer from "react-audio-player";
import podcast1x20 from "../assets/podcasts/elgrupo1-20.mp3";

let Podcasts = () => {
  return (
    <>
      <div className="podcasts-container">
        <h3 className="title-podcasts">Introducción</h3>
        <h3 className="title-podcasts">Temporada 1</h3>
        <ReactAudioPlayer src={podcast1x20} controls />
        <ReactAudioPlayer src={podcast1x20} controls />
        <ReactAudioPlayer src={podcast1x20} controls />
        <ReactAudioPlayer src={podcast1x20} controls />
      </div>
    </>
  );
};

export default Podcasts;
