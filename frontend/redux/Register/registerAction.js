import { notify } from "../../utils/Toastify/toastify";
import { fetchRegister } from "../Auth.service";


const fetchRegisterRequest = () => {
  return {
    type: "FETCH_Register_REQUEST",
  };
};

const fetchRegisterSuccess = () => {
  return {
    type: "FETCH_Register_SUCCESS",
  };
};

const fetchRegisterFailure = () => {
  return {
    type: "FETCH_Register_FAILURE",
  };
};

const register = (name, email, phone, password, password_confirmation) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest());
    return fetchRegister(name, email, phone, password, password_confirmation)
      .then((response) => {
        const demo = response.data;
        dispatch(fetchRegisterSuccess(demo));
        notify("Your Account Created Successfully ", 'success');
        window.location = "/login";
      })
      .catch((error) => {
        notify("Invalid data 😣", 'error');
        const msg = error.message;
        dispatch(fetchRegisterFailure(msg));
      });
  };
};

export { fetchRegisterSuccess, fetchRegisterFailure, register };
