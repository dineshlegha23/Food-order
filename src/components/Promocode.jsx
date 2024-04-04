import React from "react";

const Promocode = () => {
  return (
    <div>
      <p className="font-medium mb-2">If you have a promocode, enter it here</p>
      <div>
        <input
          type="text"
          placeholder="promo code"
          className="border-[1px] px-2 py-1 rounded-s-md bg-black/10 placeholder:text-black/70 w-[400px]"
        />
        <button className="bg-black text-white px-5 py-[5px] rounded-e-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Promocode;
