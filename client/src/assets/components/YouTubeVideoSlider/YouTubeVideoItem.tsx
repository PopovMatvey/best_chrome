import React from "react";
import { YouTubeVideo } from "../YouTubeVideo";

// YouTube видео пункт слайдера
export const YouTubeVideoItem = ({ item, width }: any) => {
  return (
    <div className="carousel-item" style={{ width }}>
      <YouTubeVideo videoId={item} />
    </div>
  );
};