import React, { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import { obtenerCategoriaPorNombre, obtenerProductosPorCategoria } from "../../services/categoria.services";

import pizza1 from "../../assets/img_menu/pizzza1.png";
import pizza2 from "../../assets/img_menu/pizzza2.png";
import pizza3 from "../../assets/img_menu/pizzza3.png";
import pizza4 from "../../assets/img_menu/pizzza4.png";
import pizza5 from "../../assets/img_menu/pizzza5.png";
import pizza6 from "../../assets/img_menu/pizzza6.png";
import pizza7 from "../../assets/img_menu/pizzza7.png";
import pizza8 from "../../assets/img_menu/pizzza8.png";

const imageMap = {
    "pizzza1.jpg": pizza1,
    "pizzza2.jpg": pizza2,
    "pizzza3.jpg": pizza3,
    "pizzza4.jpg": pizza4,
    "pizzza5.jpg": pizza5,
    "pizzza6.jpg": pizza6,
    "pizzza7.jpg": pizza7,
    "pizzza8.jpg": pizza8,
};

const PizzaSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const categoria = await obtenerCategoriaPorNombre("Pizzas");
                if (!categoria) return;

                const productos = await obtenerProductosPorCategoria(categoria.id);
                const productsWithImages = productos.map((producto) => ({
                    id: producto.id,
                    name: producto.nombre,
                    price: producto.precio,
                    image: imageMap[producto.imagen] || pizza1,
                }));

                setProducts(productsWithImages);
            } catch (error) {
                return error;
            }
        };

        fetchPizzas();
    }, []);

    return <MenuSection title="Pizzas" items={products} />;
};

export default PizzaSection;
