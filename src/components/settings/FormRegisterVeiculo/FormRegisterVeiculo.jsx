import { React, useState } from "react";

export default function FormRegisterVeiculo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  return (
    <div>
      <div className="wrap-input">
        <input
          className={name !== "" ? "has-val input" : "input"}
          type="string"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Name"></span>
      </div>

      <div className="wrap-input">
        <input
          className={description !== "" ? "has-val input" : "input"}
          type="string"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Description"></span>
      </div>

      <div className="wrap-input">
        <input
          className={price !== "" ? "has-val input" : "input"}
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="1"
        />
        <span className="focus-input" data-placeholder="Price"></span>
      </div>

      <div className="wrap-input">
        <input
          className={image !== "" ? "has-val input" : "input"}
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Image Url"></span>
      </div>

      <div>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Cadastrar Veículo</button>
        </div>
      </div>
    </div>
  );
}
