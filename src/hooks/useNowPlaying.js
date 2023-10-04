import { useEffect } from "react";
import { TMDB_URL, URL_OPTIONS_TMDB } from "../utils/constants";
import { useDispatch } from "react-redux";
import { appendMovie } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      TMDB_URL + "/now_playing?language=en-US&page=1",
      URL_OPTIONS_TMDB
    );

    const jsonData = await data.json();
    console.log({ jsonData });

    dispatch(appendMovie(jsonData));
  };
  useEffect(() => {
    fetchData();
  }, []);
};

export default useNowPlaying;
