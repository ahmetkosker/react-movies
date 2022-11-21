import axios from "axios";
import { useEffect, useState } from "react";
import { endPoint } from "./endPoint";
import { FaStar } from "react-icons/fa";

export default function Detail({ data, dataType }) {
  console.log(data);
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    data.id &&
      axios
        .request({
          method: "GET",
          url: `//api.themoviedb.org/3/${dataType}/${data.id}/videos?api_key=${endPoint.apiKey}&language=en-US`,
        })
        .then(function (response) {
          setTrailer(
            "https://www.youtube.com/embed/" +
              response.data.results[0].key +
              "?autoplay=1&mute=1"
          );
          setGenres(data.genres);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [data]);
  return (
    <section className="details-section">
      <div className="container " style={{ height: "auto" }}>
        <div className="details">
          <div className="detail-video">
            <iframe width="100%" height="100%" src={`${trailer}`}></iframe>
          </div>
          <div className="other-details">
            <div
              className="other-details-item orangered detail-top"
              style={{
                backgroundImage: `url(${endPoint.imageTMDB}${data.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="detail-title">
                <h1>{data.original_title || data.original_name}</h1>
              </div>
              <div className="title-items">
                {genres.map((genre, index) => {
                  return (
                    <div className="title-item genre" key={index}>
                      <h6>{genre.name}</h6>
                    </div>
                  );
                })}
                <div className="title-item star">
                  <h6>
                    {data.vote_average && data.vote_average.toFixed(1)}
                    <FaStar />
                  </h6>
                </div>
                <div className="title-item">
                  <h6>{data.release_date}</h6>
                </div>
                <div className="title-item">
                  <h6>
                    {data.spoken_languages &&
                      data.spoken_languages[0].english_name}
                  </h6>
                </div>
              </div>
            </div>
            <div className="other-details-item orangered">
              <div className="detail-title">
                <h1>Overview</h1>
              </div>
              <div className="title-items overview">
                <h6>{data.overview}</h6>
              </div>
            </div>
            <div className="other-details-item orangered">
              <div className="title-items overview">
                <h6>
                  <a href={`${data.homepage}`}>Home Page</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
