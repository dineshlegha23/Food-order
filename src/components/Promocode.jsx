import React, { useRef } from "react";
import { useUserContext } from "../context/context";

const Promocode = () => {
  const promoRef = useRef();
  const { promo, handlePromo, promoError } = useUserContext();
  return (
    <div className="md:mx-auto md:w-full">
      <p className="font-medium mb-2">If you have a promocode, enter it here</p>
      <div className="md:w-full">
        <input
          ref={promoRef}
          type="text"
          placeholder="promo code"
          className="border-[1px] px-2 py-1 rounded-s-md bg-black/10 placeholder:text-black/70 w-[400px] lg:w-[30vw] xs:w-[70%]"
        />
        <button
          onClick={() => handlePromo(promoRef.current.value)}
          className="bg-black text-white px-5 py-[5px] rounded-e-md"
        >
          Submit
        </button>
      </div>
      {promo && (
        <div className="bg-green-400 p-2 px-5 text-white flex justify-between">
          <p className="">
            <span className="font-bold">{promo}</span> applied successfully
          </p>
          <button onClick={() => handlePromo(`remove ${promo}`)}>X</button>
        </div>
      )}
      {promoError && (
        <div className="bg-orange-400 p-2 px-5 text-white flex justify-between">
          <p className="">
            <span className="font-bold">{promo}</span> {promoError}
          </p>
          <button onClick={() => handlePromo("")}>X</button>
        </div>
      )}
    </div>
  );
};

export default Promocode;
