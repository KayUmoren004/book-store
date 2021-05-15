import * as types from "./actionTypes";

export const loginTest = () => {
  return {
    type: types.LOGIN_TEST,
  };
};

export const getJWTToken = (token) => {
  return {
    type: types.JWT_Token,
    token,
  };
};

export const search = (searchInput) => {
  return {
    type: types.SEARCH,
    payload: searchInput,
  };
};

export const getBook = (selectedBook) => {
  return {
    type: types.BOOK_SELECTED,
    payload: selectedBook,
  };
};
