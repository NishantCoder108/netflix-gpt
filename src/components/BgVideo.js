import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const BgVideo = () => {
  const movie = useSelector((store) => store.movies.movies_list?.results[0]);
  const { id, original_title, title } = movie;

  const videoList = useMovieVideo(id);
  console.log({ videoList });
  const trailerVideo =
    videoList?.filter((video) => video.type === "Trailer") || videoList?.[0];

  console.log({ trailerVideo });

  console.log("Bg Video", id, original_title);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PMzw5X4SlsQ?si=dMNn2MkCTIgHKaag"
        title={title || original_title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loop
        mute
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BgVideo;
