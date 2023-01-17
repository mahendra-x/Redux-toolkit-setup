import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Test from "../components/Test";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/test" element={<Test />}/>

      </Routes>
    </BrowserRouter>
  );
}
