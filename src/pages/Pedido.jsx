import React from "react";
import PedidoDetalle from "../components/Pedidos/PedidoDetalle";
import PedidoResumen from "../components/Pedidos/PedidoResumen";
import SeleccionarPedido from "../components/Pedidos/SeleccionarPedido";
import NavbarBlack from "../components/NavbarBlack";
import "../styles/pedido.css";

const Pedido = () => {
    return (
        <div >
            <NavbarBlack />
            <div className="header-h1">
                <h1>Ordena tu pedido</h1>
            </div>
            <div className="contenedor">

                <section className="contenedor-col1">
                    <PedidoDetalle />
                    <PedidoResumen />
                </section>

                <SeleccionarPedido />
            </div>
        </div>
    );
};

export default Pedido;
