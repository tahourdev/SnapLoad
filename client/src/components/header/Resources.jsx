import React from "react";
import youtube from "../assets/yt.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import Social from "./Social";

const Resources = () => {
  return (
    <div className="flex space-x-8 items-center">
      <Social link="/youtube-downloader" logoImage={youtube} logoName="YouTube" />
      <Social link="/youtube-downloader" logoImage={facebook} logoName="YouTube" />
      <Social link="/youtube-downloader" logoImage={youtube} logoName="YouTube" />
    </div>
  );
};

export default Resources;
