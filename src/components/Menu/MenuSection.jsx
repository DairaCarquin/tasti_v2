import React from "react";
import "../../styles/menu/menu.css";

const MenuSection = ({ items }) => {
    const handleOrder = (item) => {
    const pedidos = JSON.parse(sessionStorage.getItem("pedidos")) || [];

    const nuevoPedido = {
        ...item,
        cantidad: 1,
        tamano: "personal",
        extras: [],
    };

    pedidos.push(nuevoPedido);

    sessionStorage.setItem("pedidos", JSON.stringify(pedidos));
    sessionStorage.setItem("pedidoActual", JSON.stringify(nuevoPedido)); // 🔁 Este es el importante

    window.location.href = "/pedido";
    };

    return (
        <section className="menu-section active">
            <div className="menu-contenido">
                {items.map((item, index) => (
                    <div key={index} className="menu-secciones">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p className="personal">{item.size}</p>
                        <div className="ordenar">
                            <p className="price">S/. {item.price}</p>
                            <button className="order-button" onClick={() => handleOrder(item)}>
                                Ordenar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuSection;
