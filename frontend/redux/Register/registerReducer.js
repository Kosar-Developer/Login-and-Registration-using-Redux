/* eslint-disable default-case */

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const reducerRegister = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_Register_REQUEST":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "FETCH_Register_SUCCESS":
      return {
        ...state,

        user: action.payload,
      };
    case "FETCH_Register_FAILURE":
      return {
        ...state,

        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducerRegister };
