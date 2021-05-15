import * as types from "./actionTypes";

const reducer = (
  state = {
    text: "Login",
    JWT: "",
    searchInput: "",
    book: [],
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_TEST:
      return {
        ...state,
        text: "Login",
      };
    case types.JWT_Token:
      return {
        ...state,
        JWT: action.token,
      };
    case types.SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };
    case types.BOOK_SELECTED:
      return {
        ...state,
        book: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
