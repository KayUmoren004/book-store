import * as types from "./actionTypes";

export const getJWTToken = (token) => {
  return {
    type: types.JWT_TOKEN,
    payload: token,
  };
};

export const Search = (searchInput) => {
  return {
    type: types.SEARCH,
    payload: searchInput,
  };
};

export const CurrentBook = (currentBookDetails) => {
  return {
    type: types.CURRENT_BOOK,
    payload: currentBookDetails,
  };
};

export const WantToRead = (Wbook) => {
  return {
    type: types.WTR,
    payload: Wbook,
  };
};

export const CurrentlyReading = (Cbook) => {
  return {
    type: types.WTR,
    payload: Cbook,
  };
};

export const Read = (Rbook) => {
  return {
    type: types.WTR,
    payload: Rbook,
  };
};
