import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "../hooks/auth";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

export default function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <AuthProvider>
          <Route path="/register" element={<Register />} />
        </AuthProvider>
      </Routes>
    </BrowserRouter>
  );
}
