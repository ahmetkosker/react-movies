import { useState, useEffect } from "react";
import axios from "axios";
import { endPoint } from "./endPoint";
import MainSearchBar from "./MainSearchBar";

export function MainSearch() {
  const [mainSearch, setMainSearch] = useState("");
  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `${endPoint.multiSearch}&language=en-US&page=1&query=${mainSearch}`,
      })
      .then(function (response) {
        setData(response.data.results.splice(0, 5));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [mainSearch]);

  return (
    <div className="nav-flex">
      <input
        className="navSearch"
        placeholder="Search"
        value={mainSearch}
        onChange={(e) => setMainSearch(e.target.value)}
      ></input>
      {mainSearch.length > 0 ? <MainSearchBar data={data} /> : ""}
      <div className="text-center"></div>
    </div>
  );
}
