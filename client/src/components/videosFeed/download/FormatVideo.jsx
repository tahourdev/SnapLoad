import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoIosArrowDown } from "react-icons/io";

const FormatVideo = ({ showLoading, setSelectedFormat, selectedFormat }) => {
  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
  };
  return (
    <div>
      {showLoading ? (
        <Skeleton width={150} />
      ) : (
        <div className="inline-flex flex-1 relative items-center mt-2 justify-center overflow-hidden border-teal-secondary border rounded-md gap-2 text-black">
          <select
            onChange={handleFormatChange}
            value={selectedFormat}
            className="cursor-pointer text-sm pl-2 pr-6 py-[7px] outline-none">
            <option value="137">1080p HD</option>
            <option value="136">720p</option>
            <option value="135">480p</option>
            <option value="18">360p</option>
            <option value="249">mp3</option>
          </select>
          <span className="custom-arrow text-black top-3 text-[10px]">
            <IoIosArrowDown />
          </span>
        </div>
      )}
    </div>
  );
};

export default FormatVideo;
