import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CreatorName = ({ showLoading, creator }) => {
  return (
    <div>
      {showLoading ? (
        <Skeleton count={1} width={50} />
      ) : (
        <p>
          Creator: <span className="!font-semibold text-slate-700">{creator || <Skeleton count={1} />}</span>
        </p>
      )}
    </div>
  );
};

export default CreatorName;
