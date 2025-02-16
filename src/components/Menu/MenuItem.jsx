import React from "react";
import "../../styles/menu/menu.css";

const MenuItem = ({ name, price, image }) => {
    return (
        <div className="menu-secciones">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="personal">Personal</p>
            <div className="ordenar">
                <p className="price">S/. {price}</p>
                <button className="order-button" data-name={name} data-price={price} data-image={image}>
                    Ordenar
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
