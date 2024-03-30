import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useUserContext } from "../context/context";

const FoodItem = ({ id, name, image, price, description }) => {
  const { increaseQuantity, decreaseQuantity } = useUserContext();
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="rounded-xl overflow-hidden  shadow-[0px_1px_10px_1px_rgba(0,0,0,0.1)]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="hover:scale-110 transition-all duration-500"
        />
        <div className="absolute bottom-2 right-2">
          {quantity > 0 ? (
            <div className="flex gap-3 items-center bg-white rounded-full p-[5px] cursor-pointer">
              <img
                onClick={() => {
                  setQuantity(quantity - 1);
                  decreaseQuantity(id);
                }}
                src={assets.remove_icon_red}
                alt="remove icon"
              ></img>
              <p className="font-semibold">{quantity}</p>
              <img
                onClick={() => {
                  setQuantity(quantity + 1);
                  increaseQuantity(id, name, price, description, image);
                }}
                src={assets.add_icon_green}
                alt="add icon"
              ></img>
            </div>
          ) : (
            <img
              onClick={() => {
                setQuantity(quantity + 1);
                increaseQuantity(id, name, price, description, image);
              }}
              src={assets.add_icon_white}
              alt="plus icon"
              className="w-10 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="pl-4 mt-3 mb-5 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{name}</p>
          <div className="pr-3 w-[80px]">
            <img src={assets.rating_starts} alt="rating icon" />
          </div>
        </div>
        <p className="text-[12px]">{description}</p>
        <p className="text-orange-500 font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
