import React, { useState } from "react";
import "../../styles/home.css";

const Pedido = () => {
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarPedido = (name, price, image) => {
    setPedido([...pedido, { name, price, image }]);
    setTotal(total + parseFloat(price));
  };

  return (
    <div>
      <h3>Total: S/. {total.toFixed(2)}</h3>
      <ul id="pedido-detalle">
        {pedido.map((item, index) => (
          <li key={index}>{item.name} (1 unid.) - S/.{item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pedido;
