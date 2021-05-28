import * as React from "react";

import "./styles/MyWorks.carousel.info.scss";
import { useAppSelector } from "../../hooks/redux";

interface IMyWorksCarouselInfoProps {}

const MyWorksCarouselInfo: React.FunctionComponent<IMyWorksCarouselInfoProps> = (props) => {
  const { title, stack, linkToView, linkToWatchCode } = useAppSelector(
    (state) => state.carousel.activeSlideInfo,
  );

  return (
    <div className="carousel__info">
      <div className="carousel__info-block">
        <p className="carousel__site-name">
          <span className="carousel__info-title">Site: </span> {title}
        </p>
        <p className="carousel__stack">
          <span className="carousel__info-title">Stack-technology:</span> {stack}
        </p>
      </div>
      <div className="carousel__links">
        <span className="carousel__info-title">Links:</span>
        <div>
          <a href={linkToView}>View Demo</a>
          <a href={linkToWatchCode}>View Code</a>
        </div>
      </div>
    </div>
  );
};

export default MyWorksCarouselInfo;
