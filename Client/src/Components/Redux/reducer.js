import * as types from "./actionTypes";

const reducer = (
  state = {
    JWT: "",
    searchInput: "",
    currentBook: "",
    WantToRead: [],
    CurrentlyReading: [],
    Read: [],
  },
  action
) => {
  switch (action.type) {
    case types.JWT_TOKEN:
      return {
        ...state,
        JWT: action.payload,
      };
    case types.SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };
    case types.CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.payload,
      };
    case types.WTR:
      return {
        ...state,
        WantToRead: [...state.WantToRead, action.payload],
      };
    case types.CR:
      return {
        ...state,
        CurrentlyReading: [...state.CurrentlyReading, action.payload],
      };
    case types.R:
      return {
        ...state,
        Read: [...state.Read, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
