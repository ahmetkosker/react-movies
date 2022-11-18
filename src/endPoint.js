const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3/";
const imageTMDB = "https://image.tmdb.org/t/p/original";

export const endPoint = {
  baseUrl,
  movies: `${baseUrl}search/movie?api_key=${apiKey}`,
  popularMovies: `${baseUrl}movie/popular?api_key=${apiKey}`,
  tvSeries: `${baseUrl}search/tv?api_key=${apiKey}`,
  popularTvSeries: `${baseUrl}tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  upcoming: `${baseUrl}upcoming?api_key=${apiKey}`,
  multiSearch: `${baseUrl}search/multi?api_key=${apiKey}`,
  apiKey,
  imageTMDB,
};
