import * as React from "react";
import isNumber from "lodash/isNumber";
import { useDispatch } from "react-redux";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { useAppSelector } from "../../hooks/redux";
import "./styles/MyWorks.carousel.scss";
import { setInfo } from "../../store/carousel/carouselSlice";
// import MyWorksCarouselInfo from "./MyWorks.carousel.info";
// import { Link } from "react-router-dom";

type TSlide = {
  title: string;
  stack: string;
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
  const dispatch = useDispatch();
  const title = useAppSelector((state) => state.carousel.activeSlideInfo.title);

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

  return (
    <>
      {/* <MyWorksCarouselInfo /> */}
      <div className="carousel">
        <ul className="carousel__track">
          {props.slides.map(
            ({ img, linkToView = "#", linkToWatchCode = "#", stack, title }, idx) => {
              if (idx === position) {
                dispatch(setInfo({ linkToView, linkToWatchCode, stack, title }));
              }
              return (
                <li
                  className="carousel__item"
                  key={img}
                  style={getTransformSlide(idx, position, props.slides.length - 1)}
                >
                  <img src={img} alt="" className="carousel__img" />
                </li>
              );
            },
          )}
        </ul>
        <button className="carousel__action" onClick={() => actionHandler("decrement")}>
          <BiLeftArrow />
        </button>
        <button className="carousel__action" onClick={() => actionHandler("increment")}>
          <BiRightArrow />
        </button>
      </div>
      {/*  */}
      <div className="carousel__info">{title} - Homepage</div>
    </>
  );
};

export default MyWorksCarousel;
