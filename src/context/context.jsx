import { createContext, useState, useContext, useEffect } from "react";
import { food_list } from "../assets/assets";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(food_list);
  const [cartItems, setCartItems] = useState([]);
  const [promo, setPromo] = useState("");
  const [promoError, setPromoError] = useState("");
  const [total, setTotal] = useState(0);
  const promoValues = ["flat100", "food10", "free"];

  function handlePromo(text) {
    if (text === "") {
      setPromo("");
      setPromoError("");
      return;
    }

    setPromoError("");

    if (text.startsWith("remove")) {
      handleTotal();
      setPromo("");
      setPromoError("");
      return;
    }

    for (const value of promoValues) {
      if (promo.length != 0) {
        return;
      }
      if (value === text.toLowerCase()) {
        if (value === "flat100") {
          total > 100
            ? setTotal((prev) => prev - 100)
            : setPromoError("cart total must be more than $100");
          total > 100 && setPromo("flat100");
          return;
        }
        if (value === "food10") {
          total > 100
            ? setTotal((prev) => prev - prev * 0.1)
            : setPromoError("Cart value must be greater than $100");
          total > 100 && setPromo("food10");

          return;
        }
        if (value === "free") {
          setTotal(5);
          setPromo("free");
          setPromoError("");
          return;
        }
      }
      setPromoError("Invalid promocode");
    }
  }

  function handleTotal() {
    setTotal(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }

  // useEffect(() => {
  //   handleTotal();
  // }, [cartItems]);

  function handleFoodCategory(name) {
    if (name === "all") {
      setFoodItems(food_list);
    } else {
      setFoodItems(food_list.filter((item) => item.category === name));
    }
  }

  function increaseQuantity(id, name, price, description, image) {
    let find = false;
    cartItems.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
        find = true;
        return;
      }
    });
    {
    }
    if (find === false) {
      setCartItems([
        ...cartItems,
        { id, name, image, price, description, quantity: 1 },
      ]);
    }
  }

  function decreaseQuantity(id) {
    cartItems.forEach((item) => {
      if (item.id === id) {
        if (item.quantity === 0) {
          return;
        } else {
          item.quantity = item.quantity - 1;
        }
      }
    });
    setCartItems(cartItems.filter((item) => item.quantity > 0));
  }

  return (
    <Context.Provider
      value={{
        foodItems,
        handleFoodCategory,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        total,
        setTotal,
        handleTotal,
        promo,
        setPromo,
        handlePromo,
        promoError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useUserContext = () => {
  return useContext(Context);
};
