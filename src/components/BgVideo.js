import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";
import { YOUTUBE_EMBED_URL } from "../utils/constants";

const BgVideo = ({ movieId }) => {
  const videoList = useMovieVideo(movieId);

  if (videoList.length === 0) return;

  const trailerVideo =
    videoList.filter((video) => video.type === "Trailer") || videoList[0];

  const { key, name } = trailerVideo[0];

  console.log({ trailerVideo });

  return (
    <div className="w-full aspect-video">
      <iframe
        width="100%"
        height={"100%"}
        src={
          YOUTUBE_EMBED_URL +
          "/" +
          key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&loop=1"
        }
        frameBorder="0"
        allowFullScreen
        title=" "
        name={name}
      ></iframe>
    </div>
  );
};

export default BgVideo;
