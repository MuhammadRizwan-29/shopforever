import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (Children) => {
  const currency = "$";
  const delievery_fee = 10;

  const value = {
    products,
    currency,
    delievery_fee,
  };

  return <ShopContext.Provider value={value}>{Children}</ShopContext.Provider>;
};

export default ShopContextProvider;
