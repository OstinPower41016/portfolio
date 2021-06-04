import * as React from "react";
import isNumber from "lodash/isNumber";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "../../hooks/redux";
import "./styles/MyWorks.carousel.scss";

type TSlide = {
  title: string;
  img: string;
  link: string;
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
  const { t } = useTranslation();

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
      <div className="carousel" data-animation="carousel__zoom">
        <ul className="carousel__track">
          {props.slides.map(({ img }, idx) => {
            return (
              <li
                className="carousel__item"
                key={img}
                style={getTransformSlide(idx, position, props.slides.length - 1)}
              >
                <img src={img} alt="" className="carousel__img" />
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
      <a
        href={props.slides[position].link}
        className="carousel__info"
        data-animation="carousel__info-visibility"
        target="_blank"
      >
        {props.slides[position].title} - {t("portfolio.homepage")}
      </a>
    </>
  );
};

export default MyWorksCarousel;
