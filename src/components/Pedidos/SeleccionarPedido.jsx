import React, { useEffect, useState } from "react";

const SeleccionarPedido = () => {
    const [pedido, setPedido] = useState({});
    const [cantidad, setCantidad] = useState(1);
    const [tamano, setTamano] = useState("personal");

    useEffect(() => {
        const pedidos = JSON.parse(sessionStorage.getItem("pedidos")) || [];
        if (pedidos.length > 0) {
            setPedido(pedidos[pedidos.length - 1]);
            setCantidad(pedidos[pedidos.length - 1].cantidad || 1);
            setTamano(pedidos[pedidos.length - 1].tamano || "personal");
        }
    }, []);

    const actualizarPedido = () => {
        const pedidos = JSON.parse(sessionStorage.getItem("pedidos")) || [];
        if (pedidos.length > 0) {
            pedidos[pedidos.length - 1] = { ...pedido, cantidad, tamano };
            sessionStorage.setItem("pedidos", JSON.stringify(pedidos));
            window.location.reload(); // Refresca la página para actualizar los datos
        }
    };

    return (
        <section className="contenedor-col2">
            <h3>Seleccionar Pedido</h3>

            <div className="inputBox">
                <label>Platillo:</label>
                <input type="text" value={pedido.name || ""} readOnly />
            </div>

            <div className="inputBox">
                <label>Tipo:</label>
                <input type="text" value={pedido.tipo || ""} readOnly />
            </div>

            <div className="inputBox">
                <label>Tamaño:</label>
                <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
                    <option value="personal">Personal</option>
                    <option value="mediana">Mediana</option>
                    <option value="familiar">Familiar</option>
                </select>
            </div>

            <div className="inputBox">
                <label>Cantidad:</label>
                <input type="number" value={cantidad} min="1" onChange={(e) => setCantidad(parseInt(e.target.value))} />
                <button onClick={actualizarPedido}>Actualizar</button>
            </div>
        </section>
    );
};

export default SeleccionarPedido;