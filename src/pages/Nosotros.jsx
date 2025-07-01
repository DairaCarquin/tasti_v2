import React from "react";
import NavbarBlack from "../components/NavbarBlack";
import AboutUs from "../components/Nosotros/AboutUs";
import "../styles/pedido-page.css";

const Nosotros = () => {
    return (
        <div>
            <NavbarBlack />
            <div className="contenedor-pedidos">
            <AboutUs />
            </div>
        </div>
    );
};

export default Nosotros;
