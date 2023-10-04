export const AVATAR_URL = "https://github.com/NishantCoder108.png";

export const TMDB_URL = "https://api.themoviedb.org/3/movie";

export const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed";

export const URL_OPTIONS_TMDB = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_URL_OPTIONS_TMDB_AUTH,
  },
};

export const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
