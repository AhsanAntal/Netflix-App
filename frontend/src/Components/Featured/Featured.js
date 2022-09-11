import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import backGround from "../Featured/pexels-christian-buergi-13014389.jpg";
import "./featured.scss";
import feature from "../Featured/featured.jpg";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span className="head">{type}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={backGround} width="100%" alt="background img" />
      <div className="info">
        <img src={feature} alt="pic" />
        <span className="description">Dota dragons blood!</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
