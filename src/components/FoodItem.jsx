import React from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ name, image, price, description }) => {
  return (
    <div className="rounded-xl overflow-hidden  shadow-[0px_1px_10px_1px_rgba(0,0,0,0.1)]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="hover:scale-110 transition-all duration-500"
        />
        <div className="absolute bottom-2 right-2">
          <img
            src={assets.add_icon_white}
            alt="plus icon"
            className="w-10 cursor-pointer"
          />
        </div>
      </div>
      <div className="pl-4 mt-3 mb-5 flex flex-col gap-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-[12px]">{description}</p>
        <p className="text-orange-500 font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
