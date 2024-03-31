import { createContext, useState, useContext, useEffect } from "react";
import { food_list } from "../assets/assets";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(food_list);
  const [cartItems, setCartItems] = useState([]);

  function handleFoodCategory(name) {
    if (name === "all") {
      setFoodItems(food_list);
    } else {
      setFoodItems(food_list.filter((item) => item.category === name));
    }
  }

  function increaseQuantity(id, name, price, description, image) {
    if (cartItems.find((item) => item.id === id)) {
      cartItems.forEach((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
          return;
        } else {
          return item;
        }
      });
    } else {
      cartItems.push({ id, name, image, price, description, quantity: 1 });
    }
    console.log(cartItems);
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
    console.log(cartItems);
  }

  return (
    <Context.Provider
      value={{
        foodItems,
        handleFoodCategory,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
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
