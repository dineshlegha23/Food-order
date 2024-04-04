import React from "react";
import { useUserContext } from "../context/context";

const CartTotals = () => {
  const { cartItems } = useUserContext();
  let total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 5;
  return (
    <section className="max-w-[600px] w-[400px]">
      <span className="font-semibold text-xl">Cart Totals</span>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between mt-3 border-b-[1px] pb-1">
          <p>Subtotal</p>
          <p> ${total}</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-1 font-semibold">
          <p> Delivery Fee</p>
          <p>${deliveryFee}</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-1 font-semibold">
          <p>Total</p>
          <p>${total + deliveryFee}</p>
        </div>
      </div>
      <button className="mt-5 bg-orange-600 px-5 py-1 rounded-md text-white">
        Proceed to checkout
      </button>
    </section>
  );
};

export default CartTotals;
