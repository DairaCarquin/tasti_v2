import React from "react";
import "../../styles/home.css";

import reviewsImg from "../../assets/img/steptodown2.png";
import clienteImg from "../../assets/img/Ellipse14.png";

const Clientes = () => {
    return (
        <section className="clientes">
            <h1 className="menu-title">REVIEWS DE CLIENTES</h1>
            <div className="contenedor-review">
                <img src={reviewsImg} alt="Reviews" />
                <div className="comentarios">
                    <div className="come1">
                        <p>Buenísimo, lo recomiendo definitivamente.</p>
                        <img src={clienteImg} alt="Cliente 1" />
                    </div>
                    <div className="come2">
                        <img src={clienteImg} alt="Cliente 2" />
                        <p>Buenísimo, lo recomiendo definitivamente.</p>
                    </div>
                    <div className="come3">
                        <img src={clienteImg} alt="Cliente 3" />
                        <p>Buenísimo, lo recomiendo definitivamente.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clientes;
