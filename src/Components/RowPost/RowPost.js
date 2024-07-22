import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import "./RowPost.css";
import TrailerOverlay from './TrailerOverlay'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [trailerVideoId, setTrailerVideoId] = useState(null);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching TV shows:", error);
      });
  }, [props.url]);

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setTrailerVideoId(response.data.results[0].key);
        } else {
          console.log("Array Empty");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie videos:", error);
      });
  };

  const closeTrailer = () => {
    setTrailerVideoId(null);
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            key={obj.id}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl}${
              props.isSmall ? obj.poster_path : obj.backdrop_path
            }`}
            alt={obj.title || obj.name || obj.original_name}
          />
        ))}
      </div>
      {trailerVideoId && (
        <TrailerOverlay videoId={trailerVideoId} onClose={closeTrailer} />
      )}
    </div>
  );
}

export default RowPost;