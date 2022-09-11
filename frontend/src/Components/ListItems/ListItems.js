import React, { useEffect, useState } from "react";
import "./listItems.scss";

import {
  AddCircleOutline,
  PlayArrow,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItems({ items, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/movies/find/" + items,
          {
            headers: {
              token:
                " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTgzNjVmOGFlNDg2NTg4OGNkZjNmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjg5NzU1NywiZXhwIjoxNjYzMzI5NTU3fQ.LJWXO2UBoWRy7akorV8TW9az3PreAAf1DpHErWnnntI",
            },
          }
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [items]);

  return (
    <Link to={{ pathname: "/watch", movies: movies }}>
      <div
        className="listItems"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movies.img} alt="dota 2 img" />
        {isHovered && (
          <>
            <video src={movies.trailer} autoPlay={true} loop />

            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <AddCircleOutline className="icon" />
                <ThumbUpAlt className="icon" />
                <ThumbDownAlt className="icon" />
              </div>
              <div className="itemInfoTop">
                <span> {movies.duration}</span>
                <span className="limit">+{movies.limit}</span>
                <span>{movies.year}</span>
              </div>
              <div className="desc">{movies.desc}</div>
              <div className="genre"> {movies.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
