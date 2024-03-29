import React, { useState } from "react";
import { useUserContext } from "../context/context";

const ExploreMenuList = ({ name, image, isName, setIsName }) => {
  const { handleFoodCategory } = useUserContext();

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        <img
          src={image}
          alt={name}
          className={`min-w-28 min-h-28 rounded-full cursor-pointer ${
            name === isName
              ? "border-8 border-red-500"
              : "border-8 border-blue-500"
          }
          `}
          onClick={() => {
            if (isName === "") {
              handleFoodCategory("");
              setIsName(name);
            } else {
              setIsName("");
              handleFoodCategory(name);
            }
          }}
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ExploreMenuList;
