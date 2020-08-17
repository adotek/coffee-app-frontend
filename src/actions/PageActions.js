export const SET_TEXT = "SET_TEXT";
export const SET_DATA = "SET_DATA";
export const SET_INDEX = "SET_INDEX";
export const SET_PAY = "SET_PAY";

export function setText(text) {
  return {
    type: SET_TEXT,
    payload: text,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function setActiveIndex(index) {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
export function setPay(pay) {
  return {
    type: SET_PAY,
    payload: pay,
  };
}
