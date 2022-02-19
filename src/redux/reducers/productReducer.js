import { ActionTypes } from "../constants/actionTypes";
const intialState = {
  products:{},
};
export const productsReducer = (state = intialState, { type, payload }) => {//action destructuring
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state,products: payload  };
      default:
        return state;
    }
  };