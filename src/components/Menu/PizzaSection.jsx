import React from "react";
import MenuItem from "./MenuItem";
import "../../styles/menu/menu.css";

import pizza1 from "../../assets/img_menu/pizzza1.png";
import pizza2 from "../../assets/img_menu/pizzza2.png";
import pizza3 from "../../assets/img_menu/pizzza3.png";
import pizza4 from "../../assets/img_menu/pizzza4.png";
import pizza5 from "../../assets/img_menu/pizzza5.png";
import pizza6 from "../../assets/img_menu/pizzza6.png";
import pizza7 from "../../assets/img_menu/pizzza7.png";
import pizza8 from "../../assets/img_menu/pizzza8.png";

const pizzas = [
    { name: "Pizza Peperoni", price: "18.50", image: pizza1 },
    { name: "Pizza Vegetariana", price: "15.50", image: pizza2 },
    { name: "Pizza Hawaiana", price: "18.50", image: pizza3 },
    { name: "Pizza Mix", price: "20.00", image: pizza4 },
    { name: "Pizza Francesa", price: "19.00", image: pizza5 },
    { name: "Pizza", price: "18.00", image: pizza6 },
    { name: "Pizza Magic", price: "20.00", image: pizza7 },
    { name: "Pizza de la Casa", price: "15.00", image: pizza8 },
];

const PizzaSection = () => {
    return (
        <section id="pizzas" className="menu-seccion">
            <div className="menu-contenido">
                {pizzas.map((pizza, index) => (
                    <MenuItem key={index} {...pizza} />
                ))}
            </div>
        </section>
    );
};

export default PizzaSection;
