import React, { useEffect } from "react";

export default function Movie({ data, loading, setLoading }) {
  const movie = {
    image: `https://image.tmdb.org/t/p/original/${data.poster_path}` || false,
    releaseYear: data.release_date,
    title: data.original_title,
    vote: data.vote_average,
  };

  return loading == "true" ? (
    "Loading"
  ) : (
    <>
      <img
        src={movie.image ? movie.image : "Loading"}
        alt="There is not a photo."
        width={400}
        height={400}
      />
      <h1>Movie : {movie.title}</h1>
      <h3>IMDB : {movie.vote}</h3>
      <h3>Release Date : {movie.releaseYear}</h3>
    </>
  );
}
