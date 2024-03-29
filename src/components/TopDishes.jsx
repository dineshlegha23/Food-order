import React from "react";
import { useUserContext } from "../context/context";
import FoodItem from "./FoodItem";

const TopDishes = () => {
  const { foodItems } = useUserContext();
  return (
    <div className="mx-auto max-w-[1200px] p-5" id="menu">
      <p className="font-semibold text-lg">Top dishes near you</p>
      <div className="grid grid-cols-4 gap-8 mt-5">
        {foodItems.map((foodItem) => (
          <FoodItem
            key={foodItem._id}
            name={foodItem.name}
            image={foodItem.image}
            price={foodItem.price}
            description={foodItem.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TopDishes;
