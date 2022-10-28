import React, { createContext, useContext } from "react";
import AllMovies from "./AllMovies";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import { MainContext } from "./context";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/movies" element={<AllMovies />}></Route>
    </Routes>
  );
}

export default App;
