import React, { useState } from "react";
import "./YtDownload.css";
import DownloadBtn from "./DownloadBtn";
import FormatVideo from "./FormatVideo";

const YtDownload = ({ src, showLoading }) => {
  const [selectedFormat, setSelectedFormat] = useState("137");
  const videoSrc = src.sources[0].src;
  return (
    <div className="flex items-center gap-2 justify-between">
      <DownloadBtn videoSrc={videoSrc} showLoading={showLoading} selectedFormat={selectedFormat} />
      <FormatVideo showLoading={showLoading} setSelectedFormat={setSelectedFormat} />
    </div>
  );
};

export default YtDownload;
