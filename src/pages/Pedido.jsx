import React from "react";
import PedidoDetalle from "../components/Pedidos/PedidoDetalle";
import SeleccionarPedido from "../components/Pedidos/SeleccionarPedido";
import NavbarBlack from "../components/NavbarBlack";
import "../styles/pedido-page.css";

const Pedido = () => {
    return (
        <div >
            <NavbarBlack />
            <div className="header-h1">
                <h1>Ordena tu pedido</h1>
            </div>
            <div className="contenedor-pedidos">
                <div className="contenedor-pedido">
                    <section className="contenedor-col1">
                        <PedidoDetalle />
                    </section>
                    <div className="contenedor-col1">
                        <SeleccionarPedido />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pedido;
