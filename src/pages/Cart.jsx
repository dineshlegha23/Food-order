import React from "react";
import { useUserContext } from "../context/context";
import FoodItem from "../components/FoodItem";

const Cart = () => {
  const { cartItems } = useUserContext();
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="grid grid-cols-3 gap-8 mt-5 w-5/6 mx-auto">
        {cartItems.length > 0 &&
          cartItems.map((foodItem) => (
            <FoodItem
              key={foodItem.id}
              id={foodItem.id}
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

export default Cart;
