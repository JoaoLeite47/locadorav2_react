import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import "./LoginInputs.css";

export default function LoginInputs() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

function handleSignIn(e) {
  signIn({ nickname, password })
    e.preventDefault();
    navigate("/home");
  }
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
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        <div>
          <div className="container-login-form-btn">
            <button className="login-form-btn" onClick={handleSignIn}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
