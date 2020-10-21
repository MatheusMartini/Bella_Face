import axios from "axios";

const API_URL = "http://localhost:3306/bella_face";

const login = (user, pass) => {
  return axios
    .post(API_URL + "/login", {
      user,
      pass,
    })
    .then((response) => {
      console.log(response)
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("id");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("id"));
};

export default {
  login,
  logout,
  getCurrentUser,
};
