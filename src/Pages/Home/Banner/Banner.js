import React from "react";

import img1 from "../../../Assets/img/background.jpeg";
import img2 from "../../../Assets/img/background.jpeg"
import BannerItem from "./BannerItem";

const bannerData = 
  [{
    image:img1,
    prev: 2,
    id: 1,
    next: 2,
  },{
    image: img2,
    prev: 1,
    id: 2,
    next: 1,
  }]
  

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
