import React from "react";
import Playstore from "../../assets/play-store.png";
import Applestore from "../../assets/apple-store.png";

const DownloadApp = () => {
  return (
    <div className="space-y-4 mb-10">
      <div className="space-y-2">
        <p className="font-semibold text-slate-900">Download SnapLoad App</p>
        <p className="text-sm text-slate-600">
          I now provide an app for downloading TikTok videos. It is fast, easy, with no watermark and HD
          quality
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center w-full">
        <img className="w-full max-w-[165px]" src={Playstore} alt="app-store" />
        <img className="w-full max-w-[130px]" src={Applestore} alt="app-store" />
      </div>
    </div>
  );
};

export default DownloadApp;
