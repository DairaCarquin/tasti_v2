import React, { useEffect, useState } from "react";
import "../../styles/pedido.css";

const PedidoDetalle = () => {
    const [pedidos, setPedidos] = useState([]);
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        const pedidosGuardados = JSON.parse(sessionStorage.getItem("pedidos")) || [];
        setPedidos(pedidosGuardados);

        if (pedidosGuardados.length > 0) {
            setImagen(pedidosGuardados[0].image);
        }
    }, []);

    return (
        <div className="contenedor-col1">
            <div className="header-col">
                <img id="pedido-imagen" src={imagen} alt="Imagen de pedido" />
            </div>

            <div className="col1">
                <h3><b>Detalle del Pedido</b></h3>
                <div className="col1-pedido-contenedor">
                    <ul>
                        {pedidos.map((pedido, index) => (
                            <li key={index}>
                                {pedido.name} ({pedido.cantidad || 1} unid.) - S/.{(pedido.price * (pedido.cantidad || 1)).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="boton">
                    <a href="/pago">PAGAR</a>
                </button>
            </div>
        </div>
    );
};

export default PedidoDetalle;
