import { initialCartState } from "./CartInitialState";

export const cartActionType = {
  ADD_PRODUCT: "ADD_PRODUCT",
  RESET: "RESET",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionType.ADD_PRODUCT:
      const currentProducts = [...state.products];
      const currentProduct = { ...action.payload };
      currentProducts.push(currentProduct);

      return {
        ...state,
        products: currentProducts,
        quantity: state.quantity + currentProduct.quantity,
        total: state.total + currentProduct.price * currentProduct.quantity,
      };
    case cartActionType.RESET:
      return { ...initialCartState };
  }
};
