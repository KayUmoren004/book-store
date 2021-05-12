import * as types from "./actionTypes";

const reducer = (
  state = {
    text: "Login",
    JWT: "",
    searchInput: "",
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
        searchInput: action.payload.searchInput,
      };
    default:
      return state;
  }
};

export default reducer;
