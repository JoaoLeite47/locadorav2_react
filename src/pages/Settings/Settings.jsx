import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import RegisterButtons from "../../components/Register/RegisterButtons/RegisterButtons";
import RegisterInputs from "../../components/Register/RegisterInputs/RegisterInputs";
import FormRegisterLoja from "../../components/settings/FormRegisterLoja/FormRegisterLoja";
import FormRegisterVeiculo from "../../components/settings/FormRegisterVeiculo/FormRegisterVeiculo";
import "./Settings.css";

export default function Settings() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container-settings">
          <div className="wrap-settings">
            <form className="settings-form">
              <FormRegisterLoja />
            </form>
          </div>
          <div className="wrap-settings">
            <form className="settings-form">
              <FormRegisterVeiculo />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
