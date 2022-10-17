import React from "react";
import "./css/likedMovie.css";

const LikedMovie = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  console.log(movie);
  return (
    <div className="liked_movie_container">
      <img src={base_url + movie.poster_path} alt="Movie Image" />
      <div className="liked-movie-info">
        <h1>{movie?.name || movie?.original_title}</h1>
        <p>{movie.overview}</p>
        <p className="red">
          Release Date:{movie?.release_date || movie?.first_air_date}
        </p>
        <p className="red">Users Vote:{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default LikedMovie;
