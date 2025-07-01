import React, { useEffect, useState } from "react";
import "../../styles/pedido.css";
import API_URL from "../../config/config";

const PedidoDetalle = () => {
  const [pedido, setPedido] = useState({});
  const [imagen, setImagen] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cargarPedido = () => {
      const pedidoActual = JSON.parse(sessionStorage.getItem("pedidoActual")) || {};
      setPedido(pedidoActual);
      setImagen(pedidoActual.image || "");
      setCantidad(pedidoActual.cantidad || 1);

      const precioFinal = pedidoActual.precioFinal != null
        ? pedidoActual.precioFinal
        : (pedidoActual.price || 0) * (pedidoActual.cantidad || 1);

      setSubtotal(precioFinal);
    };

    cargarPedido();

    const handlePedidoActualizado = () => {
      cargarPedido();
    };

    window.addEventListener("pedidoActualActualizado", handlePedidoActualizado);
    return () => {
      window.removeEventListener("pedidoActualActualizado", handlePedidoActualizado);
    };
  }, []);

  const agregarAlCarrito = async () => {
  if (!pedido.id || !pedido.name || !pedido.price) {
    alert("No hay producto válido seleccionado");
    return;
  }

  const sessionId = localStorage.getItem("sessionId");
  if (!sessionId) {
    alert("No hay sesión activa");
    return;
  }

  const payload = {
    sessionId: sessionId,
    productoId: pedido.id,
    cantidad: cantidad,
    tamano: pedido.tamano || null,
    extras: pedido.extras || [],
    imagen: pedido.imagen 
  };

  try {
  const res = await fetch(`${API_URL}/carrito/agregar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error en backend: ${res.status} - ${errorText}`);
    }

    alert(`${pedido.name} agregado al carrito`);
    sessionStorage.removeItem("pedidoActual");
    window.location.href = "/carrito";

  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    alert("Hubo un error al agregar el producto al carrito.");
  }
};

  return (
    <div className="contenedor-col1">
      <div className="header-col">
        {imagen && (
          <img id="pedido-imagen" src={imagen} alt="Imagen de pedido" />
        )}
      </div>

      <div className="col1">
        <h3><b>Detalle del Pedido</b></h3>
        <div className="col1-pedido-contenedor">
          <p>{pedido.name} ({cantidad} unid.) - S/. {subtotal.toFixed(2)}</p>

          {pedido.extras && pedido.extras.length > 0 && (
            <ul>
              {pedido.extras.map((extra, index) => (
                <li key={index}>
                  + {extra} - S/.{" "}
                  {(() => {
                    const categoria = pedido.categoria;
                    const precios = {
                      Pizzas: 3,
                      Hamburguesas: 4,
                      Bebidas: 5,
                      Complementos: 10,
                    };
                    return precios[categoria] || 0;
                  })().toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div className="monto-linea">
            <span>Subtotal:</span>
            <span>S/. {subtotal.toFixed(2)}</span>
          </div>
          <hr />
          <div className="monto-linea total-final">
            <span><b>Total:</b></span>
            <span><b>S/. {(subtotal).toFixed(2)}</b></span>
          </div>
        </div>

        <button className="boton" onClick={agregarAlCarrito}>
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default PedidoDetalle;
