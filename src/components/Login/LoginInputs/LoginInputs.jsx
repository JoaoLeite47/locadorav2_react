import { React, useState } from "react";
import "./LoginInputs.css";
import { useAuth } from "../../../hooks/auth";

export default function LoginInputs() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ nickname, password });
  };

  return (
    <div>
      <form className="login-form">
        <div className="wrap-input">
          <input
            className={nickname !== "" ? "has-val input" : "input"}
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
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
