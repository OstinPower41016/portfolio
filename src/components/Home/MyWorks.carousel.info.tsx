import * as React from "react";

interface IMyWorksCarouselInfoProps {
  title: string;
  stack: string;
  linkToView: string;
  linkToWatchCode: string;
}

const MyWorksCarouselInfo: React.FunctionComponent<IMyWorksCarouselInfoProps> = (props) => {
  const { title, stack, linkToView, linkToWatchCode } = props;

  return (
    <div className="carousel__info">
      <div className="carousel__info__block">
        <p className="carousel__site-name">{title}</p>
        <p className="carousel__stack">{stack}</p>
      </div>
      <div className="carousel__links">
        Links:
        <a href={linkToView}>View Demo</a>
        <a href={linkToWatchCode}>View Code</a>
      </div>
    </div>
  );
};

export default MyWorksCarouselInfo;
