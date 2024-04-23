import React from "react";
import { simplifyViews } from "../../../utils/simplifyViews";
import YtDownload from "../download/YtDownload";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Title from "./Title";
import CreatorName from "./CreatorName";
import Views from "./Views";

const VideoDescription = ({ title, creator, publishedDate, showLoading, view, src }) => {
  // console.log(simplifiedViews);
  return (
    <div className=" my-5 font-inter flex flex-col gap-3">
      <Title showLoading={showLoading} title={title} />
      <div className="text-xs font-medium text-slate-700 flex flex-col gap-[4px]">
        <CreatorName showLoading={showLoading} creator={creator} />
        <Views publishedDate={publishedDate} view={view} />
      </div>
      <YtDownload showLoading={showLoading} src={src} />
    </div>
  );
};

export default VideoDescription;
