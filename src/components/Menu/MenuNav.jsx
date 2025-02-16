import React, { useState } from "react";
import BurgerSection from "./BurgerSection";
import PizzaSection from "./PizzaSection";
import ComplementoSection from "./ComplementosSection";
import BebidaSection from "./BebidasSection";
import OtrosSection from "./OtrosSection";
import "../../styles/menu/menu.css";

const MenuNav = () => {
    const [activeSection, setActiveSection] = useState("burgers"); 

    const renderSection = () => {
        switch (activeSection) {
            case "burgers":
                return <BurgerSection />;
            case "pizzas":
                return <PizzaSection />;
            case "complementos":
                return <ComplementoSection />;
            case "bebidas":
                return <BebidaSection />;
            case "otros":
                return <OtrosSection />;
            default:
                return <BurgerSection />; 
        }
    };

    return (
        <div id="menu">
            <nav id="menu-nav">
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("burgers"); }}>BURGERS</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("pizzas"); }}>PIZZAS</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("otros"); }}>OTROS</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("complementos"); }}>COMPLEMENTOS</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("bebidas"); }}>BEBIDAS</a>
            </nav>
            {renderSection()}  
        </div>
    );
};

export default MenuNav;
