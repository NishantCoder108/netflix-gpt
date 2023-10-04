import React from "react";
import BgVideo from "./BgVideo";
import Title from "./Title";
import useNowPlaying from "../hooks/useNowPlaying";
import { useSelector } from "react-redux";

const MainComponent = () => {
  useNowPlaying();
  const movie = useSelector((store) => store.movies.movies_list?.results[0]);

  if (!movie) return "Loading...";

  console.log({ movie });
  const { id, original_title, title, overview } = movie;
  return (
    <div className="relative ">
      <BgVideo movieId={id} />
      <Title original_title={original_title || title} overview={overview} />
    </div>
  );
};

export default MainComponent;
