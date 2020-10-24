import axios from "axios";


const login = (user, pass) => {
  return axios
    .post("/login", {
      user: user,
      password: pass,
    })
    .then((response) => {
      console.log(response)
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
