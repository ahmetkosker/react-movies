const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3/";
const imageTMDB = "https://image.tmdb.org/t/p/original";

export const endPoint = {
  baseUrl,
  movies: `${baseUrl}search/movie?api_key=${apiKey}`,
  popularMovies: `${baseUrl}movie/popular?api_key=${apiKey}`,
  upcoming: `${baseUrl}upcoming?api_key=${apiKey}`,
  imageTMDB,
};
