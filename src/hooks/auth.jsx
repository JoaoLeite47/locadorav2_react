import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  async function signIn({ nickname, password }) {
    try {
      const response = await api.post("/auth", { nickname, password });

      const { token, user } = response.data;
      console.log(response.data);

      localStorage.setItem("@token_db", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user });

      alert("Login Bem sucedido!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível efetuar login");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@token_db");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
