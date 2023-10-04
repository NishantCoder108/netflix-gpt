import React from "react";
import BgVideo from "./BgVideo";
import Title from "./Title";
import useNowPlaying from "../hooks/useNowPlaying";
import { useSelector } from "react-redux";

const MainComponent = () => {
  useNowPlaying();
  const movie = useSelector((store) => store.movies.movies_list?.results?.[0]);

  if (!movie)
    return (
      <div className=" absolute bg-gradient-to-r from-[#000000]   to-transparent-to inset-0 h-[98vw]   opacity-95] ">
        Loading ...
      </div>
    );

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
