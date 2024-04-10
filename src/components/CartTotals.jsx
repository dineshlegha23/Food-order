import React, { useEffect } from "react";
import { useUserContext } from "../context/context";

const CartTotals = () => {
  const { total, handleTotal, cartItems } = useUserContext();
  const deliveryFee = 5;

  useEffect(() => {
    handleTotal();
  }, [cartItems]);

  return (
    <section className="max-w-[600px] w-[400px] xs:w-full md:mx-auto md:order-3 md:mt-10 xs:px-4">
      <span className="font-semibold text-xl">Cart Totals</span>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between mt-3 border-b-[1px] pb-1">
          <p>Subtotal</p>
          <p> ${total}</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-1 font-semibold">
          <p> Delivery Fee</p>
          <p>${total > 0 ? deliveryFee : 0}</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-1 font-semibold">
          <p>Total</p>
          <p>${total > 0 ? total + deliveryFee : 0}</p>
        </div>
      </div>
      <button
        disabled={total == 0}
        className="disabled:bg-black/50 disabled:cursor-not-allowed mt-5 bg-orange-600 px-5 py-1 rounded-md text-white"
      >
        Proceed to checkout
      </button>
    </section>
  );
};

export default CartTotals;
