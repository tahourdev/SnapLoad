import React, { useEffect, useState } from "react";
import "plyr-react/plyr.css";
import axios from "axios";
import VideoPlr from "../components/videosFeed/VideoPlyr";
import Contents from "../components/contents/Contents";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoading from "../components/loading/SkeletonLoading";

const YoutubeFeed = () => {
  const [videoSources, setVideoSources] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [rateLimit, setRateLimit] = useState(false);
  // console.log(showLoading);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: import.meta.env.VITE_APP_YOUTUBE_FEED_API_URL,
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_YOUTUBE_FEED_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_YOUTUBE_FEED_API_HOST,
        },
      };

      try {
        // Add a delay of 3 seconds

        setShowLoading(true);

        const response = await axios.request(options);
        const videos = response.data?.videos;

        if (videos && videos.length > 0) {
          // Take the first 5 videos
          const firstFiveVideos = videos.slice(0, 12);

          const videoSourcesArray = firstFiveVideos.map((video) => ({
            type: "video",
            creator: video.author,
            view: video.number_of_views,
            publishedDate: video.published_time,
            title: video.title,
            channelId: video.channel_id,
            sources: [
              {
                src: video.video_id,
                provider: "youtube",
              },
            ],
          }));

          setVideoSources(videoSourcesArray);
        }
        setShowLoading(false);
        // console.log(showLoading);
      } catch (error) {
        setShowLoading(false);
        // setRateLimit(true);
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  const plyrOptions = {
    controls: ["current-time", "pip", "fullscreen", "mute"],
    autoplay: false,
    // loadSprite: true,
    youtube: { noCookie: false, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 }, // YouTube Player API options
    // quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
  };

  // console.log("rendering after data has been fetched");

  return (
    <>
      {/* <div className="w-full flex justify{showLoading &&-center">{showLoading && <LottieAnimation />}</div> */}
      <div className="grid grid-cols-12 w-full gap-4 transition-all duration-[.4s] ease-linear my-10">
        <SkeletonLoading showLoading={showLoading} />
        {rateLimit && (
          <div className="col-span-12 text-center">
            <h1 className="text-red-600 text-6xl font-semibold w-full">Your Rate Limit ramining 0</h1>
          </div>
        )}
        {videoSources.map((videoSrc, index) => (
          <div
            className="4xl:col-span-4 md:col-span-6 col-span-12 transition-all duration-[.4s] ease-linear"
            key={index}>
            <VideoPlr
              showLoading={showLoading}
              src={videoSrc}
              videoSources={videoSources}
              plyrOptions={plyrOptions}
            />
          </div>
        ))}
      </div>
      <Contents />
    </>
  );
};

export default YoutubeFeed;
