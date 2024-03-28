import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="max-w-[1200px] p-5 mx-auto">
      <div className="relative">
        <img
          src={assets.header_img}
          alt="food in plate"
          className="2xl:h-[70vh] w-full"
        />
        <div className="absolute bottom-[30px] text-white flex flex-col gap-5 px-14">
          <h1 className="text-4xl font-semibold tracking-[2px]">
            Order your <br />
            favourite food here
          </h1>
          <p className="font-semibold max-w-[500px] text-[12px]">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="bg-white text-black px-8 py-2 rounded-full w-fit ">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
