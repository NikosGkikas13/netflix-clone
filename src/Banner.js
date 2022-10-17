import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests";
import instance from "./axios";
import "./css/banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const res = await instance.get(requests.fetchNetflixOriginals);
      const randomMovieId = Math.floor(
        Math.random() * res.data.results.length - 1
      );
      return setMovie(res.data.results[randomMovieId]);
    };
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <Link to="my-list">
            <button className="banner__button">My List</button>
          </Link>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--faceBottom" />
    </header>
  );
};

export default Banner;
