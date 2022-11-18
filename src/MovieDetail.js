import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endPoint } from "./endPoint";
import Detail from "./Detail";
import Navbar from "./Navbar";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=10592bbf0fa7762dd0c630bd9c4d69d7&language=en-US`,
      })
      .then(function (response) {
        setMovieDetail(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Detail data={movieDetail} dataType={"movie"} />
    </div>
  );
}
