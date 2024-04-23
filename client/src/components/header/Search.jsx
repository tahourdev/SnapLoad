import React, { useContext, useState } from "react";
import { RiDownloadFill } from "react-icons/ri";
import axios from "axios";
import { HomeContext } from "../../pages/HomePage";
import { extractTikTokVideoId, extractYtVideoId } from "../../utils/extractVideoId";
import { useLocation } from "react-router-dom";

const setVideoIdIfValid = (videoId, setVideoUrl, errorMessage) => {
  if (videoId) {
    setVideoUrl(videoId);
  } else {
    console.log(errorMessage);
  }
};

const Search = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const { setVideoData, error, placeholder, setShowLoading, fetchData } = useContext(HomeContext);

  const urlName = useLocation();

  const videoUrlOnChange = (e) => {
    const inputUrl = e.target.value;
    const videoYtId = extractYtVideoId(inputUrl);
    const videoTiktokId = extractTikTokVideoId(inputUrl);

    if (urlName.pathname === "/" && inputUrl) {
      setVideoIdIfValid(videoYtId, setVideoUrl, "Invalid YouTube video URL");
    } else if (urlName.pathname === "/youtube-downloader" && inputUrl) {
      setVideoIdIfValid(videoYtId, setVideoUrl, "Invalid YouTube video URL");
    } else if (urlName.pathname === "/tiktok-downloader" && inputUrl) {
      setVideoIdIfValid(videoTiktokId, setVideoUrl, "Invalid Tiktok video URL");
    }
  };

  const fetchVideoSearch = (e) => {
    e.preventDefault();
    fetchData(videoUrl);
  };

  return (
    <>
      <form onSubmit={fetchVideoSearch} className="max-w-[650px] w-full flex h-[50px]">
        <input
          value={videoUrl}
          onChange={videoUrlOnChange}
          className="text-black outline-none border-2 border-[#00C8A4] border-solid indent-3 h-full w-full rounded-l-md inline-block"
          placeholder={placeholder}
        />
        <button type="submit" className="h-full px-6 bg-secondary rounded-r-md">
          <RiDownloadFill size={25} />
        </button>
      </form>
      {error && <p className="text-red-500 my-2">{error}</p>}
    </>
  );
};

export default Search;
