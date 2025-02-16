import React from "react";
import "../../styles/home.css";
import Recomendaciones from "./Recomendaciones";
import Clientes from "./Clientes";
import DescargaMenu from "./DescargaMenu";

import burgerImg from "../../assets/img/buurgessaa.png";
import pizaImg from "../../assets/img/piiiiza.png";
import shawarmaImg from "../../assets/img/shaaawa.png";
import complementoImg from "../../assets/img/compleemento.png";
import bebidaImg from "../../assets/img/bebiiiida.png";

const menus = [
  { name: "BURGER", precio: "S/.10.90", imagen: burgerImg, link: "menu.html" },
  { name: "PIZZA", precio: "S/.30.90", imagen: pizaImg, link: "pizzas.html" },
  { name: "OTROS", precio: "S/.10.90", imagen: shawarmaImg, link: "otros.html" },
  { name: "SALADS", precio: "S/.10.90", imagen: complementoImg, link: "complementos.html" },
  { name: "BEBIDAS", precio: "S/.5.99", imagen: bebidaImg, link: "bebidas.html" },
];

const Menu = () => {
  return (
    <div className="cat-menu">
      <h1 className="menu-title">CATEGORIAS DEL MENU</h1>
      <div id="menu-container">
        {menus.map((menu, index) => (
          <div className="menu-card" key={index}>
            <img src={menu.imagen} alt={menu.name} />
            <div className="overlay">
              <h4>{menu.name}</h4>
              <div className="price-wrapper">
                <span className="subname">desde</span>
                <span className="precio">{menu.precio}</span>
              </div>
              <button className="order-btn" onClick={() => window.location.href = menu.link}>
                Pedido
              </button>
            </div>
          </div>
        ))}
      </div>
      <Recomendaciones /> {/* Agregamos las recomendaciones aquí */}
      <Clientes />
      <DescargaMenu />
    </div>
  );
};

export default Menu;
