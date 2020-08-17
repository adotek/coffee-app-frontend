import { SET_TEXT } from "../actions/PageActions";

const initialState = {
  text: "",
};

export function TextInputReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT: // изменили строку на константу
      return { ...state, text: action.payload };

    default:
      return state;
  }
}
