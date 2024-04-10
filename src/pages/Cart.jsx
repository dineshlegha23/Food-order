import React from "react";
import { useUserContext } from "../context/context";
import CartTotals from "../components/CartTotals";
import Promocode from "../components/Promocode";

const Cart = () => {
  const { cartItems, decreaseQuantity } = useUserContext();

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      {cartItems && cartItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-6 mb-2 font-semibold text-center pb-5 border-b-[1px]">
            <p className="col-span-2">Item</p>
            <p className="col-span-1">Quantity</p>
            <p className="col-span-1">Price</p>
            <p className="col-span-1">Total Price</p>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center font-semibold text-center mb-2 pb-2 border-b-[1px]"
            >
              <div className="flex items-center gap-5 col-span-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 rounded-xl md:hidden"
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
      <div className="flex justify-between mt-20 md:flex-col">
        <CartTotals />
        <Promocode />
      </div>
    </div>
  );
};

export default Cart;
