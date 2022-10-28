import React, { useEffect } from "react";
import image from "../src/images/no-image.jpg";
import { endPoint } from "./endPoint";
import { MainContext, useContext } from "./context";

export default function Movie({ loading }) {
  const { movies, search } = useContext(MainContext);

  return loading == "true" ? (
    "Loading"
  ) : (
    <div className="container grid movie-card">
      {movies.map((movie, index) => {
        return (
          <div className="movie" key={index}>
            <img
              src={
                `${endPoint.imageTMDB}${movie.poster_path}` ==
                `https://image.tmdb.org/t/p/originalnull`
                  ? image
                  : `${endPoint.imageTMDB}${movie.poster_path}`
              }
              alt="There is not a photo."
            />
            <div className="movie-infos grid">
              <div className="justfy-start flex trev-color">
                <h4 className="ligbol">MOVIE</h4>
                <h5 className="bold">IMDB : {movie.vote_average}</h5>
              </div>
              <div className="movie-title justfy-start grid-row">
                <h4>{movie.original_title}</h4>
              </div>
              <div className="justfy-end"></div>
              <div>
                <h5 className="trev-color">
                  Release Date : {movie.release_date}
                </h5>
              </div>
            </div>
          </div>
        );
        // {
        //   index + 1 == lastIndex ? <h1 ref={loadMore}>ahmetbaba</h1> : "";
        // }
      })}
    </div>
  );
}
