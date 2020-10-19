import React, { useState, useContext } from "react";
import "./login.css";
function UserLogin() {
  return (
    <div className="user-login">
      <h1 className="user-login__title">Bem vindo a Bella Face</h1>
      <form>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input id="user" type="text" name="user" placeholder="root" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" placeholder="root123"/>
        </div>
        <button className="button ">Entrar</button>
      </form>
    </div>
  );
}
export default UserLogin;
