import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloaderBtn = () => {
  return (
    <div className="overflow-hidden gap-4 bg-secondary text-white flex justify-center items-center relative w-[200px] h-[38px]">
      Download
      <FaDownload />
    </div>
  );
};

export default DownloaderBtn;
