import React from "react";
import CarritoCompras from "../components/Carrito/CarritoCompras";
import NavbarBlack from "../components/NavbarBlack";
import "../styles/carrito.css";

const Carrito = () => {
  return (
    <div>
      <NavbarBlack />
      <div className="header-h1"></div>
      <CarritoCompras />
    </div>
  );
};

export default Carrito;
