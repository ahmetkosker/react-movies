import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { endPoint } from "./endPoint";
import Movie from "./Movie";
import "./Css/app.css";
import SearchButton from "./SearchButton";
import Navbar from "./Navbar";
import { MainContext } from "./context";
function AllMovies() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState("true");
  const [search, setSearch] = useState("");
  const [length, setLength] = useState(0);

  const data = {
    search,
    setSearch,
    loading,
    setMovies,
    movies,
    length,
  };

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url:
          search.length > 0
            ? `${endPoint.movies}&language=en-US&page=1&query=${search}`
            : `${endPoint.popularMovies}&language=en-US&page=1`,
      })
      .then(function (response) {
        setMovies(response.data.results);
        setLength(response.data.results.length);
        setLoading("false");
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);

  return (
    <MainContext.Provider value={data}>
      <div className="App">
        <Navbar />
        <div>
          <SearchButton />
        </div>
        <div>
          <Movie
            who={true}
            imageClassName={"container grid movie-card"}
            infosClassName={"movie-infos grid"}
          />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default AllMovies;
