import { React, useState } from "react";
import { api } from "../../../service/api";
import "./RegisterInputs.css";

export default function RegisterInputs() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    api
      .post("/usuario", {
        nickname,
        email,
        password,
        confirmPassword,
      })
      .then(() => {
        alert("Cadastrado!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.message);
        } else {
          alert("Não foi possível realizar o cadastro!");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <form className="login-form">
        <div className="wrap-input">
          <input
            className={nickname !== "" ? "has-val input" : "input"}
            type="text"
            onChange={(e) => setNickname(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nickname"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="wrap-input">
          <input
            className={confirmPassword !== "" ? "has-val input" : "input"}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="focus-input"
            data-placeholder="Confirmar Senha"
          ></span>
        </div>

        <div>
          <div className="container-login-form-btn">
            <button className="login-form-btn" onClick={handleSignUp}>
              Singin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
