import React from "react";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <h1 className="title-nav">
        <a className="title-nav" href="/">
          TASTY
        </a>
      </h1>
      <div id="links-nav">
        <a className="title-a" href="/">
          INICIO
        </a>
        <a className="title-a" href="/menu">
          MENU
        </a>
        <a className="title-a" href="/pedido">
          PEDIDO
        </a>
        <a className="title-a" href="/nosotros">
          NOSOTROS
        </a>
        <a className="title-a" href="/contacto">
          CONTACTO
        </a>
        <a className="title-a" href="/carrito">
          CARRITO
        </a>
        <a className="title-a" href="/menu">
          <button className="button-nav">¡ORDENA YA!</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
