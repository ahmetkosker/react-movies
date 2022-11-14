import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { endPoint } from "./endPoint";
import Navbar from "./Navbar";
import { Slider } from "./Slider";
import Movie from "./Movie";
import TvSeries from "./TvSeries";
import Footer from "./Footer";
import { MainContext } from "./context";
import { SkeletonTheme } from "react-loading-skeleton";

function MainPage() {
  const [movies, setMovies] = useState([{}]);
  const [moviesLength, setMoviesLength] = useState(0);
  const [tvSeries, setTvSeries] = useState([{}]);
  const [tvSeriesLength, setTvSeriesLength] = useState(0);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `${endPoint.popularMovies}&language=en-US&page=1`,
      })
      .then(function (response) {
        setMovies(response.data.results.slice(0, 10));
        setMoviesLength(response.data.results.slice(0, 10).length);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request({
        method: "GET",
        url: `${endPoint.popularTvSeries}&language=en-US&page=1`,
      })
      .then(function (response) {
        setTvSeries(response.data.results.slice(0, 10));
        setTvSeriesLength(response.data.results.slice(0, 10).length);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const data = {
    movies,
    moviesLength,
    tvSeries,
    tvSeriesLength,
  };

  return (
    <MainContext.Provider value={data}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Navbar />
        <Slider />
        <Movie
          title={"main-page-title"}
          after={"movies"}
          imageClassName={"container grid main-movie-card"}
          infosClassName={"main-movie-infos grid"}
        />
        <div className="text-center">
          <Link className="btn mt-10" to="/movies">
            Load More
          </Link>
        </div>
        <section className="tv-series">
          <TvSeries
            title={"main-page-title"}
            after={"movies"}
            imageClassName={"container grid main-movie-card"}
            infosClassName={"main-movie-infos grid"}
          />

          <div className="text-center">
            <Link className="btn mt-10" to="/tv-series">
              Load More
            </Link>
          </div>
        </section>
      </SkeletonTheme>
      <Footer />
    </MainContext.Provider>
  );
}

export default MainPage;
