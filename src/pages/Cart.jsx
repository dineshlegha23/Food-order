import React from "react";
import { useUserContext } from "../context/context";

const Cart = () => {
  const { cartItems, decreaseQuantity } = useUserContext();

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      {cartItems && cartItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-6 mb-6 font-semibold text-center">
            <p className="col-span-2">Item</p>
            <p className="col-span-1">Quantity</p>
            <p className="col-span-1">Price</p>
            <p className="col-span-1">Total Price</p>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center text-center mb-5"
            >
              <div className="flex items-center gap-5 col-span-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 rounded-xl"
                />
                <p>{item.name}</p>
              </div>
              <p>{item.quantity}</p>
              <p>${item.price}</p>
              <p>${item.quantity * item.price}</p>
              <button onClick={() => decreaseQuantity(item.id)}>X</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold my-7">
          Cart is empty.
        </p>
      )}
      <div className="border-black border-2 w-fit px-10 py-5 mx-auto">
        Total amount: $
        {cartItems.reduce(
          (acc, result) => acc + result.price * result.quantity,
          0
        )}
      </div>
    </div>
  );
};

export default Cart;
