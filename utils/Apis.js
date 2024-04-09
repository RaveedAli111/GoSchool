import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8088";
// jwt secret
export const API_BASE_URL = `${BASE_URL}/api/`;
const jwtAxios = axios.create({
  baseURL: API_BASE_URL, //YOUR_API_URL HERE
  headers: {
    "Content-Type": "application/json",
  },
});
jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.jwtExpired) {
      console.log("Need to logout user");
      localStorage.removeItem("token");
      Cookies.remove("token");
      Cookies.remove("userInfo");
    }
    return Promise.reject(err);
  }
);
export const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete jwtAxios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default jwtAxios;
