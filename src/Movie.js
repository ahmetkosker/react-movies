import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import image from "../src/images/no-image.jpg";
import { endPoint } from "./endPoint";
import { MainContext, useContext } from "./context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Movie({
  loading,
  imageClassName,
  infosClassName,
  after,
  who,
}) {
  const { movies, search, moviesLength, setMovies } = useContext(MainContext);
  const [length, setMoviesLength] = useState(moviesLength);
  const loadMore = useRef(null);
  const [index, setIndex] = useState(1);

  const observe = () => {
    if (who) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIndex((index) => index + 1);
        }
      });
      observer.observe(loadMore.current);
    }
  };

  useEffect(() => {
    !search &&
      index !== 1 &&
      axios
        .request({
          method: "GET",
          url: `${endPoint.popularMovies}&language=en-US&page=${index}`,
        })
        .then(function (response) {
          setMovies((movies) => [...movies, ...response.data.results]);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [index]);

  useEffect(() => {
    observe();
  }, []);

  useEffect(() => {
    setMoviesLength(moviesLength);
  }, [moviesLength]);

  return loading == "true" ? (
    "Loading"
  ) : (
    <div className={after}>
      <h1 className="title">Popular Movies</h1>
      {length === 0 ? (
        <div className={imageClassName}>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
          <div className="movie">
            <Skeleton height={300} enableAnimation="true" />
            <Skeleton height={25} width={150} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
            <Skeleton height={40} enableAnimation="true" />
          </div>
        </div>
      ) : (
        <div className={imageClassName}>
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
                <div className={infosClassName}>
                  <div className="justify-start flex trev-color">
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
          })}
        </div>
      )}
      <div ref={loadMore}></div>
    </div>
  );
}
