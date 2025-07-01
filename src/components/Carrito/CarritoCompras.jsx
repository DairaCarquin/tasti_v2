import React, { useEffect, useState, useCallback } from "react";
import "../../styles/carrito.css";
import API_URL from "../../config/config";

// Hamburguesas
import burguer1 from "../../assets/img_menu/burguer1.png";
import burguer2 from "../../assets/img_menu/burguer2.png";
import burguer3 from "../../assets/img_menu/burguer3.png";
import burguer4 from "../../assets/img_menu/burguer4.png";
import burguer5 from "../../assets/img_menu/burguer5.png";
import burguer6 from "../../assets/img_menu/burguer6.png";
import burguer7 from "../../assets/img_menu/burguer7.png";
import burguer8 from "../../assets/img_menu/burguer8.png";

// Bebidas
import beb1 from "../../assets/img_menu/beb1.png";
import beb2 from "../../assets/img_menu/beb2.png";
import beb3 from "../../assets/img_menu/beb3.png";
import beb4 from "../../assets/img_menu/beb4.png";
import beb5 from "../../assets/img_menu/beb5.png";
import beb6 from "../../assets/img_menu/beb6.png";
import beb7 from "../../assets/img_menu/beb7.png";
import beb8 from "../../assets/img_menu/beb8.png";

// Complementos
import comp1 from "../../assets/img_menu/comp1.png";
import comp2 from "../../assets/img_menu/comp2.png";
import comp3 from "../../assets/img_menu/comp3.png";
import comp4 from "../../assets/img_menu/comp4.png";
import comp5 from "../../assets/img_menu/comp5.png";
import comp6 from "../../assets/img_menu/comp6.png";

// Otros
import otros1 from "../../assets/img_menu/otros1.png";
import otros2 from "../../assets/img_menu/otros2.png";
import otros3 from "../../assets/img_menu/otros3.png";
import otros4 from "../../assets/img_menu/otros4.png";
import otros5 from "../../assets/img_menu/otros5.png";
import otros6 from "../../assets/img_menu/otros6.png";

// Pizzas
import pizza1 from "../../assets/img_menu/pizza1.png";
import pizza2 from "../../assets/img_menu/pizza2.png";
import pizza3 from "../../assets/img_menu/pizza3.png";
import pizza4 from "../../assets/img_menu/pizza4.png";
import pizza5 from "../../assets/img_menu/pizza5.png";
import pizza6 from "../../assets/img_menu/pizza6.png";
import pizza7 from "../../assets/img_menu/pizza7.png";
import pizza8 from "../../assets/img_menu/pizza8.png";

const imageMap = {
  // Hamburguesas
  "burguer1.jpg": burguer1,
  "burguer2.jpg": burguer2,
  "burguer3.jpg": burguer3,
  "burguer4.jpg": burguer4,
  "burguer5.jpg": burguer5,
  "burguer6.jpg": burguer6,
  "burguer7.jpg": burguer7,
  "burguer8.jpg": burguer8,

  // Bebidas
  "beb1.jpg": beb1,
  "beb2.jpg": beb2,
  "beb3.jpg": beb3,
  "beb4.jpg": beb4,
  "beb5.jpg": beb5,
  "beb6.jpg": beb6,
  "beb7.jpg": beb7,
  "beb8.jpg": beb8,

  // Complementos
  "comp1.jpg": comp1,
  "comp2.jpg": comp2,
  "comp3.jpg": comp3,
  "comp4.jpg": comp4,
  "comp5.jpg": comp5,
  "comp6.jpg": comp6,

  // Otros
  "otros1.jpg": otros1,
  "otros2.jpg": otros2,
  "otros3.jpg": otros3,
  "otros4.jpg": otros4,
  "otros5.jpg": otros5,
  "otros6.jpg": otros6,

  // Pizzas
  "pizza1.jpg": pizza1,
  "pizza2.jpg": pizza2,
  "pizza3.jpg": pizza3,
  "pizza4.jpg": pizza4,
  "pizza5.jpg": pizza5,
  "pizza6.jpg": pizza6,
  "pizza7.jpg": pizza7,
  "pizza8.jpg": pizza8,
};

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const sessionId = localStorage.getItem("sessionId");
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [metodoPago, setMetodoPago] = useState("");

  const cargarCarrito = useCallback(async () => {
  const res = await fetch(`${API_URL}/carrito?sessionId=${sessionId}`);
  const data = await res.json();
  console.log("Carrito:", data);
  setCarrito(data);
  const totalCalculado = data.reduce((sum, item) => sum + item.precioFinal, 0);
  setTotal(totalCalculado);
  }, [sessionId]);

  useEffect(() => {
    cargarCarrito();
  }, [cargarCarrito]);

  const actualizarCantidad = async (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;

    const item = carrito.find((item) => item.id === id);
    await fetch(`/carrito/item/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cantidad: nuevaCantidad, tamano: item.tamano })
    });
    cargarCarrito();
  };

  const vaciarCarrito = async () => {
    if (!sessionId) return;
    try {
      const res = await fetch(`${API_URL}/carrito?sessionId=${sessionId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.error("Error al vaciar el carrito");
        return;
      }

      await cargarCarrito(); // Vuelve a cargar para reflejar estado real del backend
    } catch (error) {
      console.error("Error vaciando el carrito:", error);
    }
  };

  const eliminarItem = async (id) => {
    await fetch(`${API_URL}/carrito/item/${id}`, {
      method: "DELETE",
    });
    cargarCarrito();
  };

  const procederAlPago = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }
    setMostrarPopup(true);
  };

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <h2>Carrito de Compras</h2>
        <button
          onClick={() => (window.location.href = "/menu")}
          className="btn-continuar"
        >
          Continuar Comprando
        </button>
      </div>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío</p>
          <button
            onClick={() => (window.location.href = "/menu")}
            className="btn-menu"
          >
            Ir al Menú
          </button>
        </div>
      ) : (
        <>
          <div className="carrito-items">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <div className="item-imagen">
                  <img
                    src={imageMap[item.imagen || item.producto.imagen]}
                    alt={item.producto.nombre}
                  />
                </div>
                <div className="item-detalles">
                  <h4>{item.name}</h4>
                  <h4>{item.producto.nombre}</h4>
                  <p>Categoría: {item.producto.categoria.nombre}</p>
                  <p>Tamaño: {item.tamano}</p>
                  <p>Extras: </p>
                    {item.extras && item.extras.length > 0 && (
                      <ul className="extras-lista">
                        {item.extras.map((extra, index) => (
                          <li key={index}>{extra}</li>
                        ))}
                      </ul>
                    )}
                </div>
                <div className="item-cantidad">
                  <button
                    onClick={() =>
                      actualizarCantidad(item.id, item.cantidad - 1)
                    }
                    className="btn-cantidad"
                  >
                    -
                  </button>
                  <span className="cantidad">{item.cantidad}</span>
                  <button
                    onClick={() =>
                      actualizarCantidad(item.id, item.cantidad + 1)
                    }
                    className="btn-cantidad"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  <p>S/. {(item.precioFinal * item.cantidad).toFixed(2)}</p>
                  <button
                    onClick={() => eliminarItem(item.id)}
                    className="btn-eliminar"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <div className="resumen-detalle">
              <p>Subtotal: S/. {total.toFixed(2)}</p>
              <p>Delivery: S/. 8.00</p>
              <h3>Total: S/. {(total + 8).toFixed(2)}</h3>
            </div>

            <div className="carrito-acciones">
              <button onClick={vaciarCarrito} className="btn-vaciar">
                Vaciar Carrito
              </button>
              <button onClick={procederAlPago} className="btn-pagar">
                Proceder al Pago
              </button>
            </div>
          </div>
        </>
      )}

      {mostrarPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-header">
              <h3>Selecciona el método de pago</h3>
              <button className="btn-close" onClick={() => setMostrarPopup(false)}>
                &times;
              </button>
            </div>
            <div className="popup-opciones">
              <label>
                <input
                  type="radio"
                  value="tarjeta"
                  checked={metodoPago === "tarjeta"}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                <span>Tarjeta</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="efectivo"
                  checked={metodoPago === "efectivo"}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                <span>Efectivo</span>
              </label>
            </div>

            <div className="mensaje">
              El pago se realizará contraentrega.
            </div>

            <div className="popup-botones">
              <button className="btn-cancelar" onClick={() => setMostrarPopup(false)}>
                Cancelar
              </button>
              <button
                className="btn-confirmar"
                disabled={!metodoPago}
                onClick={() => {
                  sessionStorage.setItem("pedidoFinal", JSON.stringify(carrito));
                  sessionStorage.setItem("metodoPago", metodoPago);
                  window.location.href = "/pago";
                }}
              >
                Confirmar Pago
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>

  );
};

export default CarritoCompras;
