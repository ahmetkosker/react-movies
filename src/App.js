import React from "react";
import AllMovies from "./AllMovies";
import AllTvSeries from "./AllTvSeries";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movies" element={<AllMovies />}></Route>
        <Route path="/tv-series" element={<AllTvSeries />}></Route>
      </Routes>
    </SkeletonTheme>
  );
}

export default App;
