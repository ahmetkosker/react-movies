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
    <div>
      <div className="movieImg">
        <img
          src={movie.image ? movie.image : "Loading"}
          alt="There is not a photo."
        />
      </div>
      <div className="movie-infos grid">
        <div>
          <h2>Movie : {movie.title}</h2>
        </div>
        <div>
          <h4>IMDB : {movie.vote}</h4>
        </div>
        <div>
          <h4>Release Date : {movie.releaseYear}</h4>
        </div>
      </div>
    </div>
  );
}
