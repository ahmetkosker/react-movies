import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endPoint } from "./endPoint";
import Detail from "./Detail";
import Navbar from "./Navbar";

export default function MovieDetail() {
  const [tvSeriesDetail, setTvSeriesDetail] = useState({});
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}?api_key=10592bbf0fa7762dd0c630bd9c4d69d7&language=en-US`,
      })
      .then(function (response) {
        setTvSeriesDetail(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Detail data={tvSeriesDetail} dataType={"tv"} />
    </div>
  );
}
