import { useEffect, useState, useMemo, useRef, createElement } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./css/app.css";
import SearchButton from "./SearchButton";
import Navbar from "./Navbar";

function AllMovies() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState("true");
  const [search, setSearch] = useState("");
  const [scrollY, setScrollY] = useState(window.screenY);
  const loadMore = useRef();
  const onChange = (e) => setSearch(e.target.value);

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
            ? `https://api.themoviedb.org/3/search/movie?api_key=10592bbf0fa7762dd0c630bd9c4d69d7&language=en-US&page=1&include_adult=false&query=${search}`
            : "https://api.themoviedb.org/3/movie/popular?api_key=10592bbf0fa7762dd0c630bd9c4d69d7&language=en-US&page=1",
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
    <div className="App">
      <Navbar />
      <div>
        <SearchButton
          search={search}
          onChange={onChange}
          setLoading={setLoading}
        />
      </div>
      <div className="container grid movie-card">
        {loading == "true"
          ? "Loading"
          : movies?.map((movie, index) => {
              const lastIndex = movies.length - 5;
              return (
                <Movie
                  key={index}
                  index={index}
                  lastIndex={lastIndex}
                  data={movie}
                  loading={loading}
                  setLoading={setLoading}
                  loadMore={loadMore}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AllMovies;
