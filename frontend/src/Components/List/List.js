import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import ListItems from "../ListItems/ListItems";
import "./list.scss";

export default function List({ list }) {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  /// function for slider

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    setIsMoved(true);

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="list-title">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="onSlider left"
          style={{ display: !isMoved && "none" }}
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {list.content.map((items, index) => {
            return <ListItems items={items} index={index} />;
          })}
        </div>
        <ArrowForwardIosOutlined
          className="onSlider right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
