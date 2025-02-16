import React from "react";
import "../../styles/home.css";

import vector4 from "../../assets/img/Vector(4).png";
import vector5 from "../../assets/img/Vector(5).png";
import menuPDF from "../Home/Document/TastyCarta.pdf";

const DescargaMenu = () => {
    return (
        <section className="descarga">
            <img src={vector4} alt="Decoración" />
            <h1>Descarga nuestro menú</h1>
            <img src={vector4} alt="Decoración" />
            <a href={menuPDF} download="TastyMenu.pdf">
                <button className="download">DESCARGAR</button>
            </a>
            <img src={vector5} alt="Decoración" />
            <img src={vector4} alt="Decoración" />
        </section>
    );
};

export default DescargaMenu;
