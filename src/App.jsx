import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import "./styles/global.css";
import Menu from "./pages/Menu";
import Pedido from "./pages/Pedido";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("sessionId")) {
      const uuid = crypto.randomUUID();
      localStorage.setItem("sessionId", uuid);
      console.log("Nueva sesión iniciada con ID:", uuid);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
};

export default App;
