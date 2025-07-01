import React, { useEffect, useState } from "react";
import "../../styles/seleccionarPedido.css";

const EXTRAS_POR_CATEGORIA = {
  Pizzas: {
    extras: ["Peperoni extra", "Queso adicional", "Champiñones", "Aceitunas", "Pimiento", "Cebolla"],
    precio: 3,
  },
  Hamburguesas: {
    extras: ["Queso adicional", "Tocino", "Aros de cebolla", "Huevo frito", "Guacamole"],
    precio: 4,
  },
  Bebidas: {
    extras: ["Granita", "Limón", "Fresa", "Mango", "Piña"],
    precio: 5,
    nota: " (Fruta para picar aparte)"
  },
  Complementos: {
    extras: ["Salsa extra", "Papas fritas", "Aros de cebolla", "Ensalada", "Arroz", "Arroz chaufa"],
    precio: 10,
  },
};

const SeleccionarPedido = () => {
  const [pedido, setPedido] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [tamano, setTamano] = useState("personal");
  const [extrasSeleccionados, setExtrasSeleccionados] = useState([]);

  const categoria = pedido.categoria;
  const configCategoria = EXTRAS_POR_CATEGORIA[categoria] || { extras: [], precio: 0 };

  useEffect(() => {
    const pedidoActual = JSON.parse(sessionStorage.getItem("pedidoActual")) || {};
    if (Object.keys(pedidoActual).length > 0) {
      setPedido(pedidoActual);
      setCantidad(pedidoActual.cantidad || 1);
      setTamano(pedidoActual.tamano || "personal");
      setExtrasSeleccionados(pedidoActual.extras || []);
    }
  }, []);

  const toggleExtra = (extra) => {
    if (extrasSeleccionados.includes(extra)) {
      setExtrasSeleccionados(extrasSeleccionados.filter((e) => e !== extra));
    } else {
      setExtrasSeleccionados([...extrasSeleccionados, extra]);
    }
  };

  const calcularPrecioTotal = () => {
    const precioBase = pedido.price || 0;
    const esPizza = categoria === "Pizzas";
    const multiplicador =
      esPizza
        ? tamano === "mediana"
          ? 2
          : tamano === "familiar"
          ? 3
          : 1
        : 1;

    const precioExtras = configCategoria.precio * extrasSeleccionados.length;
    return (precioBase * multiplicador + precioExtras) * cantidad;
  };

  const actualizarPedido = () => {
    const pedidoActualizado = {
      ...pedido,
      cantidad,
      tamano: categoria === "Pizzas" ? tamano : undefined, // solo guardamos tamaño si es pizza
      extras: extrasSeleccionados,
      precioFinal: calcularPrecioTotal(),
    };

    sessionStorage.setItem("pedidoActual", JSON.stringify(pedidoActualizado));
    window.dispatchEvent(new Event("pedidoActualActualizado")); // para recargar en componentes que escuchen
  };

  return (
    <section className="contenedor-col2">
      <h3>Seleccionar Pedido</h3>

      <div className="inputBox">
        <label>Platillo:</label>
        <input type="text" value={pedido.name || ""} readOnly />
      </div>

      <div className="inputBox">
        <label>Categoría:</label>
        <input type="text" value={pedido.categoria || ""} readOnly />
      </div>

      {categoria === "Pizzas" && (
        <div className="inputBox">
          <label>Tamaño:</label>
          <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
            <option value="personal">Personal</option>
            <option value="mediana">Mediana</option>
            <option value="familiar">Familiar</option>
          </select>
        </div>
      )}

      <div className="inputBox">
        <label>Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          min="1"
          onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
        />
      </div>

      {configCategoria.extras.length > 0 && (
        <div className="inputBox-option">
          <label>
            Extras (S/. {configCategoria.precio.toFixed(2)} c/u)
            {configCategoria.nota || ""}
          </label>
          {configCategoria.extras.map((extra) => (
            <div key={extra}>
              <label>
                <input
                  type="checkbox"
                  checked={extrasSeleccionados.includes(extra)}
                  onChange={() => toggleExtra(extra)}
                />
                {extra}
              </label>
            </div>
          ))}
        </div>
      )}

      <div className="inputBox">
        <strong>Total estimado: S/. {calcularPrecioTotal().toFixed(2)}</strong>
      </div>

      <button onClick={actualizarPedido}>Actualizar Pedido</button>
    </section>
  );
};

export default SeleccionarPedido;
