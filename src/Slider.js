import "./css/app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { endPoint } from "./endPoint";
import image from "./images/download-background-logo-25.png";
import { clear } from "@testing-library/user-event/dist/clear";

export function Slider() {
  const [datas, setDatas] = useState([{}]);
  const [scaleRatio, setScaleRatio] = useState(1);

  const scaleRatioControl = () => {
    setScaleRatio(scaleRatio + 1);
    console.log(scaleRatio);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      scaleRatioControl();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
          {datas.map((data, index) => {
            const ratio = scaleRatio / index;
            return (
              <div className="sliderItem" key={index}>
                <img src={`${endPoint.imageTMDB}${data.poster_path}`}></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
