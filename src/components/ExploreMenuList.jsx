import React, { useState } from "react";
import { useUserContext } from "../context/context";

const ExploreMenuList = ({ name, image, category, setCategory }) => {
  const { handleFoodCategory } = useUserContext();

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        <img
          src={image}
          alt={name}
          className={`min-w-28 h-28 sm:min-w-20 sm:h-20 rounded-full cursor-pointer ${
            category === name ? "border-4 border-red-500" : ""
          }
          `}
          onClick={() => {
            setCategory((prev) => (prev === name ? "all" : name));
            handleFoodCategory(category === name ? "all" : name);
          }}
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ExploreMenuList;
