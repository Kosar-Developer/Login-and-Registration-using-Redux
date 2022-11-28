import axios from "axios";
import { fetchAPI }  from "../services/api";

const fetchRegister = (name, email, phone, password, password_confirmation) => {
  return axios.post(`${fetchAPI}/register`, {
    name,
    email,
    phone,
    password,
    password_confirmation,
  });
};

const fetchLogin = (email, password) => {
  return axios
    .post(`${fetchAPI}/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

export { fetchRegister, fetchLogin };
