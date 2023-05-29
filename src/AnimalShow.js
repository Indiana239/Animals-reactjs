import "./AnimalShow.css";
import { useState } from "react";
import bird from "./Images/bird.svg";
import cat from "./Images/cat.svg";
import cow from "./Images/cow.svg";
import dog from "./Images/dog.svg";
import gator from "./Images/gator.svg";
import heart from "./Images/heart.svg";
import horse from "./Images/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animals" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
