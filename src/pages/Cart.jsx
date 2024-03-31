import React from "react";
import { useUserContext } from "../context/context";
import FoodItem from "../components/FoodItem";

const Cart = () => {
  const { cartItems } = useUserContext();
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="grid grid-cols-4 gap-8 mt-5">
        {cartItems.length > 0 &&
          cartItems.map((foodItem) => (
            <FoodItem
              key={foodItem._id}
              id={foodItem._id}
              name={foodItem.name}
              image={foodItem.image}
              price={foodItem.price}
              description={foodItem.description}
              quantity={foodItem.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default Cart;
