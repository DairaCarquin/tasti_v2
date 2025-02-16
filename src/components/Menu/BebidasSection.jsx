import React from "react";
import MenuItem from "./MenuItem";
import "../../styles/menu/menu.css";

import beb1 from "../../assets/img_menu/beb1.png";
import beb2 from "../../assets/img_menu/beb2.png";
import beb3 from "../../assets/img_menu/beb3.png";
import beb4 from "../../assets/img_menu/beb4.png";
import beb5 from "../../assets/img_menu/beb5.png";
import beb6 from "../../assets/img_menu/beb6.png";
import beb7 from "../../assets/img_menu/beb7.png";
import beb8 from "../../assets/img_menu/beb8.png";

const bebidas = [
    { name: "Coca Cola 500 ml.", price: "5.00", image: beb1 },
    { name: "Sprite 500 ml.", price: "5.00", image: beb2 },
    { name: "Fanta 500 ml.", price: "5.00", image: beb3 },
    { name: "Pepsi 500 ml.", price: "4.00", image: beb4 },
    { name: "Coca Cola 2lt.", price: "20.00", image: beb5 },
    { name: "Pepsi 2.25 lt.", price: "15.00", image: beb6 },
    { name: "Agua sin gas 750 ml.", price: "3.00", image: beb7 },
    { name: "Agua con gas 625 ml.", price: "3.00", image: beb8 },
];

const BebidasSection = () => {
    return (
        <section id="bebidas" className="menu-seccion">
            <div className="menu-contenido">
                {bebidas.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default BebidasSection;
