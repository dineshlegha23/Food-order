import React from "react";
import { menu_list } from "../assets/assets";
import ExploreMenuList from "./ExploreMenuList";

const Explore = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Explore our menu</h2>
      <p className="text-[12px] w-[550px]">
        Choose from a diverse menu featuring a delectable array of dishes Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex gap-10 mt-4 border-black/30 border-b pb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [ms-overflow-style:none] [scrollbar-width:none]">
        {menu_list.map((item, index) => {
          return (
            <ExploreMenuList
              key={index}
              image={item.menu_image}
              name={item.menu_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
