import React from "react";
import ReactAudioPlayer from "react-audio-player";
import podcast1x20 from "../assets/podcasts/elgrupo1-20.mp3";

let Podcasts = () => {
  return (
    <>
            <ReactAudioPlayer src={podcast1x20} controls />
            <ReactAudioPlayer src={podcast1x20} controls />
            <ReactAudioPlayer src={podcast1x20} controls />
            <ReactAudioPlayer src={podcast1x20} controls />
    </>
  );
};

export default Podcasts;
