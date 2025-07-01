import React from "react";
import "../../styles/nosotros.css";
import Carousel from "./Carousel";

const AboutUs = () => {
    return (
        <div className="contenedor">
            <div className="col1">
                <h1>Sobre Nosotros</h1>
                <p>
                    Bienvenidos a TASTY, donde la pasión por la comida se encuentra con la creatividad culinaria. Nuestro restaurante
                    ofrece una amplia variedad de platos que satisfacen todos los gustos, desde jugosas hamburguesas y pizzas artesanales
                    hasta deliciosos complementos y refrescantes bebidas.
                </p>
                <button className="boton">
                    <a href="#">Ir al menú &gt;</a>
                </button>
            </div>
            <div className="col2">
                <Carousel />
            </div>
        </div>
    );
};

export default AboutUs;
