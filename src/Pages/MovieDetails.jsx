import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/movieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1e24799ceafc73bd6e73ad7c2a8f695b`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <h1>{movie.title}</h1>
        <p className="movie-rating">Rating: {movie.vote_average} / 10</p>
        <p className="movie-overview">{movie.overview}</p>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster-img"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
