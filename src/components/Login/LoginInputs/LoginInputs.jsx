import{ React, useState }from "react";
import "./LoginInputs.css";

export default function LoginInputs() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
      <div className="wrap-input">
        <input
          className={email !== "" ? "has-val input" : "input"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
}
