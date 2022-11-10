import React, { useEffect, useState } from "react";
import { api } from "../../../service/api";
import "./ModalUsuarioUpdate.css";

export default function ModalUsuarioUpdate({ onClose = () => {}, baseId }) {
  const [nickname, setNickname] = useState("");
  const [nicknameread, setNicknameread] = useState("");
  const [email, setEmail] = useState("");
  const [emailread, setEmailread] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get(`/usuario/${baseId}`);
      setNicknameread(response.data.nickname);
      setEmailread(response.data.email);
    }
    fetchUsers();
  });

  const submitHandlerUpdate = () => {
    const data = {
      nickname: nickname,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      fetch(`http://localhost:3333/usuario/${baseId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        alert("Operação concluida!");
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = (e) => {
    const data = {
      nickname: nickname,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    api
      .put(`/usuario/${baseId}`, data)
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
    <div className="clienteModalUpdate">
      <div className="clienteModalUpdateContainer">
        <button className="clienteModalUpdateClose" onClick={onClose} />
        <div className="clienteModalUpdateContant">
          <div className="formUpdateCliente">
            <form className="login-form">
              <div className="wrap-input">
                <input
                  className={nickname !== "" ? "has-val input" : "input"}
                  type="text"
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder={nicknameread}
                />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailread}
                />
                <span className="focus-input"></span>
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
                  <button className="login-form-btn" onClick={submitHandlerUpdate}>
                    Atualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
