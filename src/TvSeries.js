import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import image from "../src/images/no-image.jpg";
import { endPoint } from "./endPoint";
import { MainContext, useContext } from "./context";
import "react-loading-skeleton/dist/skeleton.css";

export default function TvSeries({
  loading,
  imageClassName,
  infosClassName,
  after,
  who,
}) {
  const { tvSeries, search, tvSeriesLength, setTvSeries } =
    useContext(MainContext);
  const [length, setTvSeriesLength] = useState(tvSeriesLength);
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
          url: `${endPoint.popularTvSeries}&language=en-US&page=${index}`,
        })
        .then(function (response) {
          setTvSeries((tvSeries) => [...tvSeries, ...response.data.results]);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [index]);

  useEffect(() => {
    observe();
  }, []);

  useEffect(() => {
    setTvSeriesLength(tvSeriesLength);
  }, [tvSeriesLength]);

  return (
    <div className={after}>
      <h1 className="title">Popular Tv Series</h1>
      {length === 0 ? (
        <div className={imageClassName}></div>
      ) : (
        <div className={imageClassName}>
          {tvSeries.flat().map((data, index) => {
            return (
              <div className="movie" key={index}>
                <img
                  src={
                    `${endPoint.imageTMDB}${data.poster_path}` ==
                    `https://image.tmdb.org/t/p/originalnull`
                      ? image
                      : `${endPoint.imageTMDB}${data.poster_path}`
                  }
                  alt="There is not a photo."
                />
                <div className={infosClassName}>
                  <div className="justify-start flex trev-color">
                    <h4 className="ligbol">SERIES</h4>
                    <h5 className="bold">IMDB : {data.vote_average}</h5>
                  </div>
                  <div className="movie-title justfy-start grid-row">
                    <h4>{data.original_name}</h4>
                  </div>
                  <div className="justfy-end"></div>
                  <div>
                    <h5 className="trev-color">
                      Release Date : {data.first_air_date}
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
