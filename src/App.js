import React from "react";
import AllMovies from "./AllMovies";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/movies" element={<AllMovies />}></Route>
    </Routes>
  );
}

export default App;
