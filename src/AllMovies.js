import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { endPoint } from "./endPoint";
import Movie from "./Movie";
import "./css/app.css";
import SearchButton from "./SearchButton";
import Navbar from "./Navbar";
import { MainContext } from "./context";
function AllMovies() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState("true");
  const [search, setSearch] = useState("");
  const [scrollY, setScrollY] = useState(window.screenY);
  const loadMore = useRef();
  const onChange = (e) => setSearch(e.target.value);
  const data = {
    search,
    setSearch,
    loading,
    movies,
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      window.scrollY > loadMore.current?.offsetTop
        ? console.log(window.scrollY - loadMore.current?.offsetTop)
        : console.log();
    });
  }, [scrollY]);

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
        <div>{loading == "true" ? "Loading" : <Movie />}</div>
      </div>
    </MainContext.Provider>
  );
}

export default AllMovies;
