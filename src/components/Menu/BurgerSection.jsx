import React from "react";
import MenuSection from "./MenuSection";

import burguer1 from "../../assets/img_menu/burguer1.png";
import burguer2 from "../../assets/img_menu/burguer2.png";
import burguer3 from "../../assets/img_menu/burguer3.png";
import burguer4 from "../../assets/img_menu/burguer4.png";
import burguer5 from "../../assets/img_menu/burguer5.png";
import burguer6 from "../../assets/img_menu/burguer6.png";
import burguer7 from "../../assets/img_menu/burguer7.png";
import burguer8 from "../../assets/img_menu/burguer8.png";

const burgerItems = [
    { name: "Magic Burguer", size: "Personal", price: 18.50, image: burguer1 },
    { name: "Black Burguer", size: "Personal", price: 15.50, image: burguer2 },
    { name: "Bacon Burguer", size: "Personal", price: 18.50, image: burguer3 },
    { name: "Broaster Burguer", size: "Personal", price: 20.00, image: burguer4 },
    { name: "Cheese Burguer", size: "Personal", price: 19.00, image: burguer5 },
    { name: "Veggie Burguer", size: "Personal", price: 18.00, image: burguer6 },
    { name: "BBQ Burguer", size: "Personal", price: 20.00, image: burguer7 },
    { name: "Grilled Burguer", size: "Personal", price: 15.00, image: burguer8 },
];

const BurgerSection = () => {
    return <MenuSection items={burgerItems} />;
};

export default BurgerSection;
