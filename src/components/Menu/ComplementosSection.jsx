import React from "react";
import MenuItem from "./MenuItem";
import "../../styles/menu/menu.css";

import comp1 from "../../assets/img_menu/comp1.png";
import comp2 from "../../assets/img_menu/comp2.png";
import comp3 from "../../assets/img_menu/comp3.png";
import comp4 from "../../assets/img_menu/comp4.png";
import comp5 from "../../assets/img_menu/comp5.png";
import comp6 from "../../assets/img_menu/comp6.png";

const complementos = [
  { name: "Ensalada César", price: "18.50", image: comp1 },
  { name: "Ensalada de Vegetales", price: "15.50", image: comp2 },
  { name: "Patatas fritas", price: "18.50", image: comp3 },
  { name: "Nachos con queso", price: "20.00", image: comp4 },
  { name: "Aros de cebolla", price: "19.00", image: comp5 },
  { name: "Tequeños", price: "18.00", image: comp6 },
];

const ComplementosSection = () => {
  return (
    <section id="complementos" className="menu-seccion">
      <div className="menu-contenido">
        {complementos.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ComplementosSection;
