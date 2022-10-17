import React from "react";
import { useSelector } from "react-redux";
import "./css/my_list.css";
import LikedMovie from "./LikedMovie";

const MyList = () => {
  const movieList = useSelector((state) => state.movie.myList);
  // console.log(movieList);
  return (
    <div className="my-list">
      {movieList.map((movie) => {
        return <LikedMovie movie={movie} />;
      })}
    </div>
  );
};

export default MyList;
