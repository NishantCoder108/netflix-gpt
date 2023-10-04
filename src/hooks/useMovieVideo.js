import { useEffect } from "react";
import { TMDB_URL, URL_OPTIONS_TMDB } from "../utils/constants";
import { useState } from "react";

const useMovieVideo = (movieId) => {
  const [videoList, setVideoList] = useState([]);
  const fetchMovieVideo = async () => {
    const data = await fetch(
      TMDB_URL + "/" + movieId + "/videos?language=en-US",
      URL_OPTIONS_TMDB
    );
    const json = await data.json();

    console.log({ json });
    setVideoList(json?.results);
  };

  useEffect(() => {
    fetchMovieVideo();
  }, []);

  return videoList;
};

export default useMovieVideo;
