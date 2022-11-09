import { React, useState } from "react";

export default function FormRegisterLoja() {
  const [number, setNumber] = useState("");

  return (
    <div>
      <div className="wrap-input">
        <input
          className={number !== "" ? "has-val input" : "input"}
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          min="1"
        />
        <span className="focus-input" data-placeholder="Numero"></span>
      </div>

      <div>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Cadastrar loja</button>
        </div>
      </div>
    </div>
  );
}
