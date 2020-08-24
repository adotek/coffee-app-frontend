import { SET_PRICE, SET_ACIVE_SIZE } from "../actions/PageActions";
import { SET_COUNT } from "../actions/PageActions";

const initialState = {
  activeSize: "",
  price: 0,
  count: 1,
};

export function PayDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRICE:
      return { ...state, price: action.payload };
    case SET_COUNT:
      return { ...state, count: action.payload };
    case SET_ACIVE_SIZE:
      return { ...state, activeSize: action.payload };

    default:
      return state;
  }
}
