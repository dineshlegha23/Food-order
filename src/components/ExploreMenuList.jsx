import React from "react";

const ExploreMenuList = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full cursor-pointer"
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ExploreMenuList;
