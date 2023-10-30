import React from "react";
// import { hostName } from "../../data/hostName";
import './css/carusel-video-item.css'

// Изображение слайдера (пункт)
export const CarouselVideolItem = ({ item, width }: any) => {
  // const hrefImage = `${hostName}${item}`;

  return (
    <div className="carousel-item" style={{ width: width }}>
      <video controls={true}>
        <source src={item}/>
      </video>
    </div>
  );
};