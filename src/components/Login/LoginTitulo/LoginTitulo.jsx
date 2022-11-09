import React from "react";
import Logo from "../../../assets/img/Logo.png"
import "./LoginTitulo.css"

export default function LoginTitulo() {
  return (
    <div>
      <span className="login-form-title"> Bem vindo </span>

      <span className="login-form-title">
        <img src={Logo} alt="Honda" />
      </span>
    </div>
  );
}
