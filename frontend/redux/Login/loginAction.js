import { fetchLogin } from "../Auth.service";
import { notify } from "../../utils/Toastify/toastify";

const fetchLoginRequest = () => {
  return {
    type: "FETCH_LOGIN_REQUEST",
  };
};

const fetchLoginSuccess = (user) => {
  return {
    type: "FETCH_LOGIN_SUCCESS",
    payload: { user },
  };
};

const fetchLoginFailure = (error) => {
  return {
    type: "FETCH_LOGIN_FAILURE",
    payload: error,
  };
};

const login = (email, password) => {
  return (dispatch) => {
    dispatch(fetchLoginRequest());
    return fetchLogin(email, password)
      .then((response) => {
        const { data } = response;
        dispatch(fetchLoginSuccess(data));
        notify("login Successfully ", 'success');
        window.location = "/home";
        const users = response.result.name;
        const email = response.result.email;
        const token = response.token;
        localStorage.setItem("user", JSON.stringify(users));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("token", JSON.stringify(token));
      })
      .catch((error) => {
        notify("Invalid data 😣", 'error');
        const msg = error.message;
        dispatch(fetchLoginFailure(msg));
      });
  };
};

export { fetchLoginSuccess, fetchLoginFailure, login };
