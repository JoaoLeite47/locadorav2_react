import React from "react";
import "./Cards.css"
import Logo from "../../assets/img/Logo.png"

export default function Cards() {
  return (
    <div class="example-1 card">
      <div class="wrapper">
        <div class="date">
          <span class="day">R$140,000</span>
        </div>
        <img className="img-product" src={Logo} alt="product images" />
        <div class="data">
          <div class="content">
            <h1 class="title">
              <a href="#/">Onix v2 completo</a>
            </h1>
            <p class="text">Para qualquer comento e topa qualquer parada!</p>
            <label for="show-menu" class="menu-button">
              <span></span>
            </label>
          </div>
          <input type="checkbox" id="show-menu" />
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-heart-o">
                <span>Editar</span>
              </a>
            </li>
            <li>
              <a href="#" class="fa fa-comment-o">
                <span>Apagar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
