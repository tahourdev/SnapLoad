import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Title = ({ showLoading, title }) => {
  return (
    <div>
      {showLoading ? <Skeleton count={1} /> : <p className="font-semibold text-sm line-clamp-2">{title}</p>}
    </div>
  );
};

export default Title;
