import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [link, setLink] = useState("home");
  return (
    <div className="flex justify-between p-5 mx-auto max-w-[1200px]">
      <div className="">
        <img src={assets.logo} alt="logo" />
      </div>
      <ul className="flex gap-8 font-semibold">
        <li
          onClick={() => setLink("home")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "home" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          home
        </li>
        <li
          onClick={() => setLink("menu")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "menu" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          menu
        </li>
        <li
          onClick={() => setLink("mobile app")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "mobile app" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          mobile app
        </li>
        <li
          onClick={() => setLink("contact us")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "contact us" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          contact us
        </li>
      </ul>
      <div className="flex gap-8">
        <div>
          <img src={assets.search_icon} alt="search icon" />
        </div>
        <div>
          <img src={assets.basket_icon} alt="basket icon" />
        </div>
        <button className="border border-black px-5 rounded-full hover:bg-black hover:text-white transition-all">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
