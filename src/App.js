import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
