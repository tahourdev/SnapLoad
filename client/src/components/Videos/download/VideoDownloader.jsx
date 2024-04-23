import React, { useContext } from "react";
import { HomeContext } from "../../../pages/HomePage";
import VideoYtDescription from "../VideoDescription/VideoYtDescription";
import YtThumbnail from "../Thumbnail/YtThumbnail";
import ReactSpinner from "../../loading/ReactSpinner";
import { useLocation } from "react-router-dom";
import TikThumbnail from "../Thumbnail/TikThumbnail";

const VideoDownloader = () => {
  const { ytData, tikData, showLoading } = useContext(HomeContext);
  const urName = useLocation();
  const ytPath = urName.pathname === "/" || urName.pathname === "/youtube-downloader";
  const tikPath = urName.pathname === "/tiktok-downloader";

  return (
    <>
      {/* <div className="w-full flex justify{showLoading &&-center">{showLoading && <LottieAnimation />}</div> */}
      {showLoading && <ReactSpinner />}
      <div
        className={`${
          ytData && !showLoading ? "max-h-[590px] opacity-100" : "max-h-0 opacity-0"
        } my-10 transition-all duration-[.4s] ease-in-out`}>
        {!showLoading && ytData && ytPath && (
          <div className="grid grid-cols-12 w-full justify-center border border-gray-200 rounded-md items-center gap-8">
            <YtThumbnail />
            <VideoYtDescription />
          </div>
        )}
        {!showLoading && tikData && tikPath && (
          <div className="grid grid-cols-12 w-full justify-center border border-gray-200 rounded-md items-center gap-8">
            <TikThumbnail />
            {/* <VideoYtDescription /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default VideoDownloader;
