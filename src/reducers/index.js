import { combineReducers } from "redux";
import { TextInputReducer } from "./InputText";
import { DataApiReducer } from "./DataApi";
import { PayDataReducer } from "./PayData";

export const rootReducer = combineReducers({
  text: TextInputReducer,
  data: DataApiReducer,
  payData: PayDataReducer,
});
