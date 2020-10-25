import Api from "./api"
const login = (user, pass) => {
  return Api
    .post("/login", {
      login: user,
      password: pass,
    })
    .then((response) => {
      console.log(response)
    });
};

export default {
  login,
};
