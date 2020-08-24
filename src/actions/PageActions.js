export const SET_TEXT = "SET_TEXT";
export const SET_DATA = "SET_DATA";
export const SET_INDEX = "SET_INDEX";
export const SET_PRICE = "SET_PRICE";
export const SET_COUNT = "SET_COUNT";
export const SET_ACIVE_SIZE = "SET_ACIVE_SIZE";

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
export function setPrice(price) {
  return {
    type: SET_PRICE,
    payload: price,
  };
}
export function setCount(count) {
  return {
    type: SET_COUNT,
    payload: count,
  };
}
export function setSize(activeSize) {
  return {
    type: SET_ACIVE_SIZE,
    payload: activeSize,
  };
}
