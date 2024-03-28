import React from "react";
import { food_list } from "../assets/assets";
import FoodItem from "./FoodItem";

const TopDishes = () => {
  return (
    <div className="mx-auto max-w-[1200px] p-5">
      <p className="font-semibold text-lg">Top dishes near you</p>
      <div className="grid grid-cols-4 gap-8 mt-5">
        {food_list.map((foodItem) => (
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
