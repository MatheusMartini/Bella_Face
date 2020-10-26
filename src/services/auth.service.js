import Api from "./api"
const login = (user, pass) => {
  return Api
    .post("/login", {
      login: user,
      password: pass,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token)
    });
};

export default {
  login,
};
