import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMAGE_URL } from "../utils/constants";

const SecondaryComponent = () => {
  const movieList = useSelector((store) => store.movies.movies_list?.results);

  console.log({ movieList });
  return (
    <div className="bg-black py-2">
      <h1 className="text-white text-4xl p-3">Popular</h1>
      <div className="flex flex-wrap gap-4 justify-between items-center p-3 ">
        {movieList?.map((item) => (
          <div key={item.id}>
            <img
              src={TMDB_IMAGE_URL + "/w200" + item.poster_path}
              alt="TMDB IMG URL"
            />
          </div>
        ))}
        <div>
          <img
            src={TMDB_IMAGE_URL + "/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg"}
            alt="TMDB IMG URL"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryComponent;
