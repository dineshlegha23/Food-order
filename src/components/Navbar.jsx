import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li
          onClick={() => setLink("menu")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "menu" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          <a href="#menu">menu</a>
        </li>
        <li
          onClick={() => setLink("mobile app")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "mobile app" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          <a href="#mobile-app">mobile app</a>
        </li>
        <li
          onClick={() => setLink("contact us")}
          className={`cursor-pointer hover:text-gray-500 ${
            link === "contact us" ? "border-b-[2px] mb-2 border-black" : ""
          }`}
        >
          <a href="#contact">contact us</a>
        </li>
      </ul>
      <div className="flex gap-8 items-center">
        <div>
          <img src={assets.search_icon} alt="search icon" />
        </div>
        <div>
          <NavLink to={"/cart"}>
            <img
              src={assets.basket_icon}
              alt="basket icon"
              onClick={() => setLink("cart")}
              className={`${link === "cart" ? "scale-110" : ""}`}
            />
          </NavLink>
        </div>
        <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
