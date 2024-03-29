import { createContext, useState, useContext } from "react";
import { food_list } from "../assets/assets";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(food_list);

  function handleFoodCategory(name) {
    if (name !== "") {
      setFoodItems(food_list.filter((item) => item.category === name));
    } else {
      setFoodItems(food_list);
    }
  }

  return (
    <Context.Provider value={{ foodItems, handleFoodCategory }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useUserContext = () => {
  return useContext(Context);
};
