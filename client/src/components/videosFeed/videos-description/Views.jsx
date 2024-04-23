import React from "react";
import { simplifyViews } from "../../../utils/simplifyViews";

const Views = ({ showLoading, publishedDate, view }) => {
  const simplifiedViews = simplifyViews(view);
  return (
    <div>
      {showLoading ? (
        <Skeleton count={1} width={100} />
      ) : (
        <div>
          <span>{simplifiedViews} views</span> &#8226; <span>{publishedDate}</span>
        </div>
      )}
    </div>
  );
};

export default Views;
