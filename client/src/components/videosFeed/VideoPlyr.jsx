import React, { useRef, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "./VideoPlyr.css";
import VideoDescription from "./videos-description/VideoDescription";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoPlr = ({ src, plyrOptions, showLoading }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="rounded-md overflow-hidden transition-all duration-[.4s] ease-linear">
        {showLoading ? (
          <Skeleton height={180} />
        ) : (
          <div className="w-full rounded-md overflow-hidden">
            <Plyr
              source={src}
              options={{
                ...plyrOptions,

                // Enable autoplay when hovered
              }}
            />
          </div>
        )}
        <VideoDescription
          title={src.title}
          creator={src.creator}
          publishedDate={src.publishedDate}
          view={src.view}
          channelId={src.channelId}
          src={src}
          showLoading={showLoading}
        />
      </div>
    </>
  );
};

export default VideoPlr;
