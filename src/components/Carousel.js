import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = () => {
  const settings = {
    showThumbs: false,
    infiniteLoop: true,
    width: "800px",
    autoPlay: true,
    centerMode: true,
    centerSlidePercentage: 100
  };
  return (
    <div className="Carousal--container">
      <Carousel {...settings}>
        <div>
          <img src={require("../img/funcrypt.png")} alt="demo-1" />
        </div>
        <div>
          <img src={require("../img/funcrypt1.png")} alt="demo-2" />
        </div>
        <div>
          <img src={require("../img/funcrypt2.png")} alt="demo-3" />
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
