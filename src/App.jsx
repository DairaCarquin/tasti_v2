import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Sin llaves si usas export default
import Nosotros from "./pages/Nosotros";
import "./styles/global.css";
import Menu from "./pages/Menu";
import Pedido from "./pages/Pedido";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
