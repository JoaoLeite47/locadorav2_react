import React from "react";
import "./LoginCreateCount.css"

export default function LoginCreateCount() {
  return (
    <div>
      <div className="text-center">
        <span className="txt1">Não possui conta? </span>
        <a className="txt2" href="/register">
          Criar conta
        </a>
      </div>
    </div>
  );
}
