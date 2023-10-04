import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";

const Browse = () => {
  return (
    <div>
      <Header />
      <MainComponent />
      {/**
       *
       * MainComponent
       *   - Bg video ,loop ,mute
       *   - title
       *
       * SecondaryComponent
       *     Card
       *        :hover--> video will be going on| width and height size will increase
       *
       */}
    </div>
  );
};

export default Browse;
