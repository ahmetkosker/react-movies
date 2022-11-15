import "./Css/app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { endPoint } from "./endPoint";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Slider() {
  const [datas, setDatas] = useState([{}]);

  const getData = () => {
    axios
      .get(
        `${endPoint.baseUrl}movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => setDatas(response.data.results));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div className="sliderTitle">
        <h1 className="text-center">Upcoming Movies</h1>
      </div>
      <div className="slider container">
        <div className="sliderItems grid">
          {datas.length === 1 ? (
            <Skeleton
              enableAnimation="false"
              count={6}
              inline="true"
              highlightColor="#202124"
              width={300}
              height={500}
            />
          ) : (
            datas.map((data, index) => {
              return (
                <div className="sliderItem" key={index}>
                  <img
                    src={`${endPoint.imageTMDB}${data.poster_path}`}
                    alt=""
                  ></img>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
