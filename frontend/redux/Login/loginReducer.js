/* eslint-disable default-case */
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: {} };

const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducerLogin };
