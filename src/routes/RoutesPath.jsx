import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "../hooks/auth";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

export default function RoutesPath() {
  // const { user } = useAuth();

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/home" element={<Home />} />
           <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
