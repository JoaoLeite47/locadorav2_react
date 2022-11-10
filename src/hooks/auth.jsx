import { createContext, useContext } from "react";
import {api} from "../service/api";

const AuthContext = createContext({});

export function AuthProvider({ props }) {
  
  async function signIn({ nickname, password }) {
    try {
      const response = await api.post("/auth", { nickname, password });
      console.log(response);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel efetuar login!");
      }
    }
  }

  return <AuthContext.Provider value={signIn}>{props}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
