import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt, FaShare, FaDownload } from "react-icons/fa";

const VideoReact = () => {
  return (
    <div className="flex gap-8 font-inter text-sm text-white font-semibold absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="inline-flex gap-2 items-center">
        <span className="">1.4M</span>
        <AiFillLike />
      </div>
      <div className="inline-flex gap-2 items-center">
        <span>26.4K</span>
        <FaCommentAlt />
      </div>
      <div className="inline-flex gap-2 items-center">
        <span>86.4K</span>
        <FaShare />
      </div>
    </div>
  );
};

export default VideoReact;
