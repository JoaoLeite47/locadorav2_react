import { React, useState } from "react";
import { api } from "../../../service/api";
import "./RegisterInputs.css";

export default function RegisterInputs() {
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const handleSignUp = () => {
    if (!nickname || !name || !password || !confirmPassword || !image) {
      return alert("Preencha todos os campos");
    }
    api
      .post("/usuario", { nickname, name, password, confirmPassword, image })
      .then(() => {
       alert("Cadastrado!")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.message);
        } else {
          alert("Não foi possível realizar o cadastro!");
        }
      });
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
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
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

        <div className="wrap-input">
          <input
            className={image !== "" ? "has-val input" : "input"}
            type="text"
            onChange={(e) => setImage(e.target.value)}
          />
          <span
            className="focus-input"
            data-placeholder="Url da sua foto!"
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
