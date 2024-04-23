import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = ({ showLoading }) => {
  const generateSkeletons = () => {
    const skeletonCount = 9; // Number of times you want to repeat the structure
    const skeletons = [];

    for (let i = 0; i < skeletonCount; i++) {
      skeletons.push(
        <div
          className="4xl:col-span-4 md:col-span-6 col-span-12 transition-all duration-[.4s] ease-linear"
          key={i}>
          <div>
            <Skeleton height={180} />
            <Skeleton count={1} />
            <Skeleton count={1} width={50} />
            <Skeleton count={1} width={100} />
            <div className="flex gap-4 justify-between">
              <Skeleton width={150} />
              <Skeleton width={150} />
            </div>
          </div>
        </div>
      );
    }

    return skeletons;
  };

  return <>{showLoading && generateSkeletons()}</>;
};

export default SkeletonLoading;
