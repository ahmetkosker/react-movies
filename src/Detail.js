import axios from "axios";
import { useEffect, useState } from "react";
import { endPoint } from "./endPoint";

export default function Detail({ data, dataType }) {
  const [trailer, setTrailer] = useState("");
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
            <iframe
              style={{ padding: 0, margin: 0 }}
              width="100%"
              height="100%"
              src={`${trailer}`}
            ></iframe>
          </div>
          <div className="other-details">
            <h1>{data.original_title || data.original_name}</h1>
            <div>
              <img
                width={300}
                height={300}
                src={`${endPoint.imageTMDB}${data.poster_path}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
