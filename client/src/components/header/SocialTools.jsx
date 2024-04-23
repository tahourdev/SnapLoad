import React from "react";
import youtube from "../../assets/yt.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import { Link } from "react-router-dom";

const SocialTools = () => {
  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 transition-all duration-[.4s] w-full ease-in gap-4 text-white">
      <Link
        to="/youtube-downloader"
        className="flex gap-3 pl-5 pr-6 py-[8px] rounded-md bg-secondary/70 items-center">
        <img className="w-8 rounded-md aspect-auto" src={youtube} alt="youtube" />
        <span className="text-sm font-inter font-medium">youtube.com</span>
      </Link>
      <Link
        to="/facebook-downloader"
        className="flex gap-3 pl-5 pr-6 py-[8px] rounded-md bg-secondary/70 items-center">
        <img className="w-8 aspect-auto" src={facebook} alt="youtube" />
        <span className="text-sm font-inter font-medium">facebook.com</span>
      </Link>
      <Link
        to="/instagram-downloader"
        className="flex gap-3 pl-5 pr-6 py-[8px] rounded-md bg-secondary/70 items-center">
        <img className="w-8 aspect-auto" src={instagram} alt="youtube" />
        <span className="text-sm font-inter font-medium">instagram.com</span>
      </Link>
      <Link
        to="/tiktok-downloader"
        className="flex gap-3 pl-5 pr-6 py-[8px] rounded-md bg-secondary/70 items-center">
        <img className="w-8 aspect-auto" src={tiktok} alt="youtube" />
        <span className="text-sm font-inter font-medium">tiktok.com</span>
      </Link>
    </div>
  );
};

export default SocialTools;
