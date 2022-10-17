import movieTrailer from "movie-trailer";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import instance from "./axios";
import "./css/row.css";
import { useDraggable } from "react-use-draggable-scroll";
import Movie from "./Movie";
import { likeMovie } from "./redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieKey, setMovieKey] = useState("");
  const ref = useRef();
  const base_url = "https://image.tmdb.org/t/p/original";
  const { events } = useDraggable(ref);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(fetchUrl);
      setMovies(res.data.results);
      // console.log(res.data.results);
    };
    fetchData();
  }, []);

  const opts = {
    height: "390px",
    window: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  const fetchid = async (movieID) => {
    const res = await movieTrailer(null, { tmdbId: movieID });
    const urlParams = new URLSearchParams(new URL(res).search);
    setTrailerUrl(urlParams.get("v"));
    console.log(res);
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        fetchid(movie.id);
        //
        movieTrailer(movie.name)
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
        //
      } catch (err) {
        console.log(err);
      }
    }
  };

  movies.map((item) => {
    dispatch(likeMovie(item));
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" {...events} ref={ref}>
        {movies.map((movie) => {
          return (
            <Movie
              id={movie.id}
              trailerUrl={trailerUrl}
              movie={movie}
              isLarge={isLargeRow}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={opts}
          style={{ textAlign: "center" }}
        />
      )}
    </div>
  );
};

export default Row;
