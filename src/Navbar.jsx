import React from "react";
import { assets } from "../src/assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 mx-auto max-w-[1024px]">
      <div>
        <img src={assets.logo} alt="logo" />
      </div>
      <ul className="flex gap-5 font-semibold">
        <li className="cursor-pointer">home</li>
        <li className="cursor-pointer">menu</li>
        <li className="cursor-pointer">mobile app</li>
        <li className="cursor-pointer">contact us</li>
      </ul>
      <div className="flex gap-8">
        <div>
          <img src={assets.search_icon} alt="search icon" />
        </div>
        <div>
          <img src={assets.basket_icon} alt="basket icon" />
        </div>
        <button className="border border-black">sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
