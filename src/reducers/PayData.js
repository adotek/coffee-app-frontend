import { SET_PAY } from "../actions/PageActions";

const initialState = {
  pay: {},
};

export function PayDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAY: // изменили строку на константу
      return { ...state, pay: action.payload };

    default:
      return state;
  }
}
