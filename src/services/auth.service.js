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

const produtos = () =>{
  const token = localStorage.getItem("token")
  return Api.get('/produtos', {headers:{"Authorization": `Bearer ${token}`}} )
  .then(response => {
    return response.data
  })
  .catch(error => {
    return error
  })
}

const pedidos = () =>{
  const token = localStorage.getItem("token")
  return Api.get("/pedidos",{headers:{"Authorization": `Bearer ${token}`}})
  .then(response => {
    return response.data
  })
  .catch(error => {
    return error
  })
}

export default {
  login,
  produtos,
  pedidos
};
