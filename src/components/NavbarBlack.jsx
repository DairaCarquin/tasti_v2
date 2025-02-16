import React from "react";
import "../styles/navBar-black.css";

const NavbarBlack = () => {
    return (
        <nav id="nav">
            <h1 className="title-nav">
                <a href="/">TASTY</a>
            </h1>
            <div id="links-nav">
                <a className="title" href="/">INICIO</a>
                <a className="title" href="/menu">MENU</a>
                <a className="title" href="/pedido">PEDIDO</a>
                <a className="title" href="/nosotros">NOSOTROS</a>
                <a className="title" href="/contacto">CONTACTO</a>
                <a className="title" href="/menu">
                    <button className="button-nav">¡ORDENA YA!</button>
                </a>
            </div>
        </nav>
    );
};

export default NavbarBlack;
