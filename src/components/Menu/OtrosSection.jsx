import React from "react";
import MenuItem from "./MenuItem";
import "../../styles/menu/menu.css";

import otros1 from "../../assets/img_menu/otros1.png";
import otros2 from "../../assets/img_menu/otros2.png";
import otros3 from "../../assets/img_menu/otros3.png";
import otros4 from "../../assets/img_menu/otros4.png";
import otros5 from "../../assets/img_menu/otros5.png";
import otros6 from "../../assets/img_menu/otros6.png";

const otros = [
  { name: "Tacos de carne asada", price: "18.50", image: otros1 },
  { name: "Lasagna", price: "15.50", image: otros2 },
  { name: "Shawarma", price: "18.50", image: otros3 },
  { name: "Chicken Subway", price: "20.00", image: otros4 },
  { name: "Salchipapa", price: "19.00", image: otros5 },
  { name: "Salchipollo", price: "18.00", image: otros6 },
];

const OtrosSection = () => {
  return (
    <section id="otros" className="menu-seccion">
      <div className="menu-contenido">
        {otros.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OtrosSection;
