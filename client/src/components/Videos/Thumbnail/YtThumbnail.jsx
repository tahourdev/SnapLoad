import React, { Suspense, useContext } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import VideoReact from "./VideoReact";
import { HomeContext } from "../../../pages/HomePage";

const VideoPlayThumbnail = () => {
  const { ytData } = useContext(HomeContext);
  const thumbnail = ytData?.thumbnails[3].url;

  return (
    <div className="col-span-6 group rounded-l-md overflow-hidden relative">
      <div className="absolute w-full bg-black/40 group-hover:bg-black/30 transition-all duration-[.2s] ease-linear left-0 right-0 top-0 bottom-0"></div>
      <div className="absolute cursor-pointer top-1/2 text-white text-6xl transition-all duration-[.2s] ease-linear left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FaCirclePlay />
      </div>
      <img className="w-full" src={thumbnail} alt="thumbnail" />
      <VideoReact />
    </div>
  );
};

export default VideoPlayThumbnail;
