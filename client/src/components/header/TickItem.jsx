import React from "react";
import Tick from "../../assets/tick.svg";

const TickItem = ({ text }) => (
  <div className="flex">
    <img className="pr-2 md:w-8 w-7" src={Tick} alt="tick" />
    <span className="md:text-base text-sm transition-all duration-300 ease-linear">{text}</span>
  </div>
);

export default TickItem;
