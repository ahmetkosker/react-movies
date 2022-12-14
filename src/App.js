import React from "react";
import AllMovies from "./AllMovies";
import AllTvSeries from "./AllTvSeries";
import MainPage from "./MainPage";
import MovieDetail from "./MovieDetail";
import TvSeriesDetail from "./TvSeriesDetail";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movies" element={<AllMovies />}></Route>
        <Route path="/tv-series" element={<AllTvSeries />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
        <Route path="/tvSeries/:id" element={<TvSeriesDetail />}></Route>
      </Routes>
    </SkeletonTheme>
  );
}

export default App;
