import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HomeContext } from "../../../pages/HomePage";
import { FaVolumeMute } from "react-icons/fa";

const VideoFormatSelect = () => {
  const [selectedFormat, setSelectedFormat] = useState("MP4 720 HD");
  const { show: showDropdonw, setShow: setShowDropdown, ytData } = useContext(HomeContext);
  const [activeItem, setActiveItem] = useState(null);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleFormatSelection = (item, index) => {
    setSelectedFormat(item);
    setShowDropdown(false);
    setActiveItem(index);
  };

  const formattedAudioData = ytData?.videos.items.map((item, index) => {
    // const mimeTypeMatch = item.mimeType.match(/^audio\/(\w+); codecs="([^"]+)"/);
    // const audioType = mimeTypeMatch ? `audio/${mimeTypeMatch[1]}` : item.mimeType;
    // const codec = mimeTypeMatch ? mimeTypeMatch[2] : "";
    const numericQuality = item.quality.match(/\d+/);
    return (
      <div
        key={index}
        onClick={() => handleFormatSelection(`${item.extension} ${numericQuality}`, index)}
        className={`${
          activeItem === index ? "bg-teal-600" : ""
        } w-full h-[35px] py-2 hover:bg-teal-600 flex justify-between !overflow-visible items-center pointer-events-auto px-[13px] cursor-pointer`}>
        <p className="uppercase">{item.extension}</p>

        <p className="text-slate-100 inline-flex items-center lowercase">
          {numericQuality}
          {item.hasAudio ? (
            ""
          ) : (
            <span className="text-white text-lg font-bold pl-2">
              <FaVolumeMute />
            </span>
          )}
        </p>
      </div>
    );
  });

  return (
    <div className="relative inline-block">
      <div
        onClick={handleToggleDropdown}
        className="gap-4 bg-secondary cursor-pointer text-white flex justify-center items-center w-[200px] h-[38px]">
        <p className="text-sm font-medium uppercase">{selectedFormat}</p>
        <IoIosArrowDown />
      </div>
      <div
        className={`${
          showDropdonw ? "max-h-[350px]" : "max-h-[0px] opacity-0"
        } absolute overflow-hidden text-sm transition-all duration-200 ease-linear w-full left-0 bg-secondary top-0 flex-col flex text-white`}>
        {formattedAudioData}
      </div>
    </div>
  );
};

export default VideoFormatSelect;
