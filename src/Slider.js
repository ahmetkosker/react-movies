import "./css/slider.css";
import axios from "axios";
import { useEffect, useState } from "react";

export function Slider() {
  const [datas, setDatas] = useState([{}]);

  const getData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=10592bbf0fa7762dd0c630bd9c4d69d7&language=en-US&page=1"
      )
      .then((response) => setDatas(response.data.results));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div className="slider container">
        <div className="sliderItem">
          {datas.map((data) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}
