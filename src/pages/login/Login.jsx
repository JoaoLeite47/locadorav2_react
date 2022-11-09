import { React } from "react";
import LoginButtons from "../../components/Login/LoginButtons/LoginButtons";
import LoginCreateCount from "../../components/Login/LoginCreateCount/LoginCreateCount";
import LoginInputs from "../../components/Login/LoginInputs/LoginInputs";
import LoginTitulo from "../../components/Login/LoginTitulo/LoginTitulo";
import "./login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <LoginTitulo />

            <LoginInputs />

            <LoginButtons />

            <LoginCreateCount />
          </form>
        </div>
      </div>
    </div>
  );
}
