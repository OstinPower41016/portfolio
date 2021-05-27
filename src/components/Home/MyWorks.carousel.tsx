import * as React from "react";
import classnames from "classnames";
import isNumber from "lodash/isNumber";

import "./styles/MyWorks.carousel.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type TSlide = {
  title: string;
  description: string;
  img: string;
  linkToView?: string;
  linkToWatchCode?: string;
};

interface IMyWorksCarouselProps {
  slides: TSlide[];
}

const getTransformSlide = (idx: number, position: number, slidesLength: number) => {
  if (idx === position) {
    return { transform: "translateX(0%)" };
  }

  if (idx === position + 1) {
    return { transform: "translateX(100%)" };
  }
  if (idx === position - 1) {
    return { transform: "translateX(-100%)" };
  }

  if (position === slidesLength && idx === 0) {
    return { transform: "translateX(100%)" };
  }

  if (position === 0 && idx === slidesLength) {
    return { transform: "translateX(-100%)" };
  } else {
    return { display: "none" };
  }
};

const MyWorksCarousel: React.FunctionComponent<IMyWorksCarouselProps> = (props) => {
  const [position, setPosition] = React.useState(0);
  const [backdrop, setVisibility] = React.useState(false);

  const actionHandler = (direction: "increment" | "decrement") => {
    let newPosition;
    if (direction === "increment") {
      newPosition = position === props.slides.length - 1 ? 0 : position + 1;
    }
    if (direction === "decrement") {
      newPosition = position === 0 ? props.slides.length - 1 : position - 1;
    }
    if (isNumber(newPosition)) {
      setPosition(newPosition);
    }
  };

  const backdropVisibility = backdrop ? "block" : "none";

  return (
    <div className="carousel">
      <ul className="carousel__track">
        {props.slides.map(({ img }, idx) => {
          return (
            <li
              className="carousel__item"
              key={img}
              style={getTransformSlide(idx, position, props.slides.length - 1)}
              onMouseOver={() => setVisibility(true)}
              onMouseLeave={() => setVisibility(false)}
            >
              <img src={img} alt="" className="carousel__img" />
              <div
                className="carousel__item-backdrop"
                style={{ display: backdropVisibility, transition: "1s all ease", opacity: 1 }}
              >
                <div className="carousel__item-links">
                  <a href="http://">View Preview</a>
                  <a href="http://">View Code</a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="carousel__action" onClick={() => actionHandler("decrement")}>
        <BiLeftArrow />
      </button>
      <button className="carousel__action" onClick={() => actionHandler("increment")}>
        <BiRightArrow />
      </button>
    </div>
  );
};

export default MyWorksCarousel;
