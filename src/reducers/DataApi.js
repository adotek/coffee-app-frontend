import { SET_DATA } from "../actions/PageActions";
import { SET_INDEX } from "../actions/PageActions";

const initialState = {
  data: [],
  activeIndex: 0,
};

export function DataApiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_INDEX:
      return { ...state, activeIndex: action.payload };

    default:
      return state;
  }
}
