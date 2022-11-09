import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

export default function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
