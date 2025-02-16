import React, { useEffect, useState } from "react";

const PedidoResumen = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const pedidos = JSON.parse(sessionStorage.getItem("pedidos")) || [];
        const totalCalculado = pedidos.reduce((sum, pedido) => sum + pedido.price * (pedido.cantidad || 1), 0);
        setTotal(totalCalculado);
    }, []);

    return (
        <div className="col2">
            <div class="col2-pedido-contenedor">

                <h3>Total: S/. {total.toFixed(2)}</h3>
                <ul>
                    <li>Delivery - S/.18.00</li>
                </ul>
            </div>
        </div>
    );
};

export default PedidoResumen;
