import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="mobile-app">
      <p className="text-3xl mx-auto text-center mt-16 font-semibold">
        For Better Experiencr Download <br /> Tomato App
      </p>
      <div className="flex text-center mx-auto justify-center mt-8 gap-5">
        <img
          src={assets.play_store}
          alt="play store icon"
          className="cursor-pointer hover:scale-105 transition-all"
        />
        <img
          src={assets.app_store}
          alt="app store icon"
          className="cursor-pointer hover:scale-105 transition-all"
        />
      </div>
    </div>
  );
};

export default AppDownload;
