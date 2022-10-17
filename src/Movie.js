import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_remove_my_List } from "./redux/movieSlice";

const Movie = ({ id, trailerUrl, movie, isLarge, handleClick }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const movieList = useSelector((state) => state.movie.myList);
  const movieLiked = useSelector((state) => state.movie.likedList);

  const dispatch = useDispatch();
  const add_remove_movie = (movie) => {
    dispatch(add_remove_my_List(movie));
  };
  const thisId = movieLiked.filter((item) => {
    return item.id == id;
  });

  return (
    <div className={`movie`}>
      <img
        movie={movie}
        onClick={() => handleClick(movie)}
        className={`row__poster ${isLarge && "row__posterLarge"}`}
        src={`${
          isLarge
            ? base_url + movie.poster_path
            : base_url + movie.backdrop_path
        }`}
        alt={movie.name}
      />
      <div className="movie_buttons" onClick={() => add_remove_movie(movie)}>
        <img
          className="poster_button"
          src={
            thisId[0].liked
              ? "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png"
              : "https://cdn4.iconfinder.com/data/icons/essentials-72/24/040_-_Tick-256.png"
          }
          alt="icon"
        />
        <p>{thisId[0].liked ? "Remove from my List" : "Add to my List"}</p>
      </div>
    </div>
  );
};

export default Movie;
