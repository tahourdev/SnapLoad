import React from "react";
import VideoFormatSelect from "./VideoFormatSelect";
import DownloaderBtn from "./DownloaderBtn";

const VideoYtDescription = () => {
  return (
    <div className="col-span-6 font-inter space-y-6 px-2">
      <h1 className="text-2xl font-semibold">
        How WHEY PROTEIN is Made In Factories | You Won't Want to Miss This!
      </h1>
      <div className="font-medium">
        <h3 className="text-base">Creator: Ounna Entertainment</h3>
        <div className="text-sm text-slate-500">
          882k views &#x2022; <span>19 hours ago</span>
          <p className="text-xs pt-3">14:40</p>
        </div>
      </div>
      <div className="gap-3 inline-flex flex-wrap items-center">
        <DownloaderBtn />
        <VideoFormatSelect />
      </div>
    </div>
  );
};

export default VideoYtDescription;
