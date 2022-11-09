import { React, useState } from "react";
import "./RegisterInputs.css"

export default function RegisterInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

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
        <span className="focus-input" data-placeholder="Senha"></span>
      </div>

      <div className="wrap-input">
        <input
          className={image !== "" ? "has-val input" : "input"}
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />     
        <span className="focus-input" data-placeholder="Url da sua foto!"></span>
      </div>
    </div>
  );
}
