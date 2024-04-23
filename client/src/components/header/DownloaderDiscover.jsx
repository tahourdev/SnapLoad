import React, { useContext } from "react";
import { RiDownloadFill } from "react-icons/ri";
import TickItem from "./TickItem";
import Search from "./Search";
import SocialTools from "./SocialTools";
import { HomeContext } from "../../pages/HomePage";

const DownloaderDiscover = () => {
  const { title, description } = useContext(HomeContext);
  return (
    <div className="flex flex-col space-y-6 items-center justify-center pb-10 text-white w-full">
      <p className="md:text-3xl text-2xl font-semibold">{title}</p>
      <p className="text-center max-w-[550px] text-slate-50">{description}</p>
      <div className="flex md:flex-row md:gap-6 gap-4 flex-wrap pb-3">
        <TickItem text="Unlimited Download" />
        <TickItem text="Another Feature" />
      </div>
      <Search />
      <SocialTools />
    </div>
  );
};

export default DownloaderDiscover;
