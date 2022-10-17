import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Movie from "./Movie";
import SearchButton from "./SearchButton";

function App() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState("true");
  const [search, setSearch] = useState("");

  const onChange = (e) => setSearch(e.target.value);

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
      <div>
        <SearchButton
          search={search}
          onChange={onChange}
          setLoading={setLoading}
        />
      </div>
      <div>
        {loading == "true"
          ? "Loading"
          : movies?.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  data={movie}
                  loading={loading}
                  setLoading={setLoading}
                />
              );
            })}
      </div>
    </div>
  );
}

export default App;
