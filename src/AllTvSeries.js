import { useEffect, useState } from "react";
import axios from "axios";
import { endPoint } from "./endPoint";
import TvSeries from "./TvSeries";
import "./Css/app.css";
import SearchButton from "./SearchButton";
import Navbar from "./Navbar";
import { MainContext } from "./context";
function AllTvSeries() {
  const [tvSeries, setTvSeries] = useState([{}]);
  const [loading, setLoading] = useState("false");
  const [search, setSearch] = useState("");
  const [tvSeriesLength, setTvSeriesLength] = useState(0);
  const data = {
    search,
    setSearch,
    loading,
    tvSeries,
    tvSeriesLength,
    setTvSeries,
  };

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url:
          search.length > 0
            ? `${endPoint.tvSeries}&language=en-US&page=1&query=${search}`
            : `${endPoint.popularTvSeries}&language=en-US&page=1`,
      })
      .then(function (response) {
        setTvSeries(response.data.results);
        setTvSeriesLength(response.data.results.length);
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
          <TvSeries
            title={"sub-title"}
            who={true}
            imageClassName={"container grid movie-card"}
            infosClassName={"movie-infos grid"}
          />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default AllTvSeries;
