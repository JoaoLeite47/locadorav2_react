import { React } from "react";
import LoginCreateCount from "../../components/Login/LoginCreateCount/LoginCreateCount";
import LoginInputs from "../../components/Login/LoginInputs/LoginInputs";
import LoginTitulo from "../../components/Login/LoginTitulo/LoginTitulo";
import "./login.css";
import "../../Global.css";

export default function Login() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
            <LoginTitulo />

            <LoginInputs />

            <LoginCreateCount />
        </div>
      </div>
    </div>
  );
}
