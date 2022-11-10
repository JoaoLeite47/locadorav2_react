import React from "react";
import RegisterInputs from "../../components/Register/RegisterInputs/RegisterInputs";
import "./Register.css";
import "../../Global.css";

export default function Register() {
  return (
    <div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
              <RegisterInputs />
          </div>
        </div>
      </div>
    </div>
  );
}
