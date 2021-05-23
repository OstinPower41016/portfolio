import * as React from "react";
import isNumber from "lodash/isNumber";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

import "./styles/MyWorksCarousel.scss";

interface IMyWorksCarouselProps {
  slides: string[];
}

const getTransformSlide = (idx: number, position: number, slidesLength: number) => {
  if (idx === position) {
    return { transform: "translateX(0%) scale(1)", opacity: 1 };
  }
  if (idx === 0 && position === slidesLength - 1) {
    console.log("left");
    return { transform: "translateX(100%) scale(0.9)", opacity: 0.9 };
  }
  if (idx === slidesLength - 1 && position === 0) {
    console.log("right");
    return { transform: "translateX(-100%) scale(0.9)", opacity: 0.9 };
  }
  if (idx === position + 1) {
    return { transform: "translateX(100%) scale(0.9)", opacity: 0.9 };
  }
  if (idx === position - 1) {
    return { transform: "translateX(-100%) scale(0.9)", opacity: 0.9 };
  }
  if (idx < position) {
    return {
      transform: "translateX(-200%) scale(0.9)",
      opacity: 0,
      transition: "1s cubic-bezier(0.79, -0.21, 0.72, 0.93)",
    };
  }
  if (idx > position) {
    return {
      transform: "translateX(200%) scale(0.9)",
      opacity: 0,
      transition: "1s cubic-bezier(0.79, -0.21, 0.72, 0.93)",
    };
  }
  throw Error("error");
};

const MyWorksCarousel: React.FunctionComponent<IMyWorksCarouselProps> = (props) => {
  const [position, setPosition] = React.useState(0);

  const setPositionHandler = (direction: "Increase" | "Decrease") => {
    let nextPosition;

    if (direction === "Increase") {
      nextPosition = position === props.slides.length - 1 ? 0 : position + 1;
    }

    if (direction === "Decrease") {
      nextPosition = position === 0 ? props.slides.length - 1 : position - 1;
    }

    if (isNumber(nextPosition)) {
      setPosition(nextPosition);
    }
  };

  return (
    <div className="my-works-carousel">
      <div className="my-works-carousel__track">
        {props.slides.map((val, idx, slides) => {
          const styleSlide = getTransformSlide(idx, position, slides.length);

          return (
            <div className="my-works-carousel__slide" key={idx}>
              <img
                src={val}
                alt="air ballon"
                className="my-works-carousel__img"
                style={styleSlide}
              />
            </div>
          );
        })}
        <div className="my-works-carousel__actions">
          <button
            onClick={() => setPositionHandler("Increase")}
            className="my-works-carousel__button--right my-works-carousel__button"
          >
            <BiRightArrow />
          </button>
          <button
            onClick={() => setPositionHandler("Decrease")}
            className="my-works-carousel__button--left my-works-carousel__button"
          >
            <BiLeftArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWorksCarousel;
