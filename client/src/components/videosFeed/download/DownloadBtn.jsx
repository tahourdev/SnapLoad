import React from "react";
import { handleDownload } from "../../../utils/handleDownload";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaDownload } from "react-icons/fa";

const DownloadBtn = ({ showLoading, videoSrc, selectedFormat }) => {
  return (
    <div>
      {showLoading ? (
        <Skeleton width={150} />
      ) : (
        <button
          onClick={() => handleDownload(videoSrc, selectedFormat)}
          className="inline-flex text-sm flex-1 items-center mt-2 justify-center px-6 py-2 bg-secondary rounded-md gap-2 text-white">
          <span>Download</span>
          <FaDownload />
        </button>
      )}
    </div>
  );
};

export default DownloadBtn;
