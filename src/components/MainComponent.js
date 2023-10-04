import React from "react";
import BgVideo from "./BgVideo";
import Title from "./Title";
import useNowPlaying from "../hooks/useNowPlaying";

const MainComponent = () => {
  useNowPlaying();

  return (
    <div className="relative pt-[6rem]">
      <BgVideo />
      <Title />
    </div>
  );
};

export default MainComponent;
