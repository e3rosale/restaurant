import { createContext, useContext, useMemo, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { initialCartState } from "./CartInitialState";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, initialCartState);

  const cartContextValue = useMemo(() => [cartState, cartStateDispatch], [cartState, cartStateDispatch]);

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export const useCartState = () => {
  const cartState = useContext(CartContext);

  if (cartState === undefined) {
    throw new Error("useCartState must be used within a CartContextProvider.");
  }

  return cartState;
};
