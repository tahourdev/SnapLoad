import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Social from "./SocialTools";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="h-20 flex items-center justify-between text-white mb-[20px]">
        <div className="lg:block w-full inline-flex justify-center items-center  transition-all duration-[.4s] ease-in">
          <Link to="/" className="text-3xl">
            <p className="text-3xl font-bold">
              Snap
              <span className="font-body text-teal-secondary">Load</span>
            </p>
          </Link>
        </div>
        <ul className="font-semibold w-full justify-end text-base lg:flex hidden">
          <li className="uppercase pr-16">faq</li>
          <li>Contact Us</li>
        </ul>
        <div className="lg:hidden block">
          <IoMenu size={30} />
        </div>
      </div>
    </>
  );
};

export default Header;
