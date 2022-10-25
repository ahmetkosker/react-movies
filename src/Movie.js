import React, { useEffect } from "react";
import image from "../src/images/no-image.jpg";

export default function Movie({
  data,
  loading,
  setLoading,
  index,
  lastIndex,
  loadMore,
}) {
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
      <div className="movie">
        <img
          src={
            movie.image == "https://image.tmdb.org/t/p/original/null"
              ? image
              : movie.image
          }
          alt="There is not a photo."
        />
        <div className="movie-infos grid">
          <div className="justfy-start flex trev-color">
            <h4 className="ligbol">MOVIE</h4>
            <h5 className="bold">IMDB : {movie.vote}</h5>
          </div>
          <div className="movie-title justfy-start grid-row">
            <h4>{movie.title}</h4>
          </div>
          <div className="justfy-end"></div>
          <div>
            <h5 className="trev-color">Release Date : {movie.releaseYear}</h5>
          </div>
        </div>
      </div>
      {index + 1 == lastIndex ? <h1 ref={loadMore}>ahmetbaba</h1> : ""}
    </div>
  );
}
