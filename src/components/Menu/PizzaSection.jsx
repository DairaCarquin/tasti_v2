import React, { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import { obtenerCategoriaPorNombre, obtenerProductosPorCategoria } from "../../services/categoria.services";

import pizza1 from "../../assets/img_menu/pizza1.png";
import pizza2 from "../../assets/img_menu/pizza2.png";
import pizza3 from "../../assets/img_menu/pizza3.png";
import pizza4 from "../../assets/img_menu/pizza4.png";
import pizza5 from "../../assets/img_menu/pizza5.png";
import pizza6 from "../../assets/img_menu/pizza6.png";
import pizza7 from "../../assets/img_menu/pizza7.png";
import pizza8 from "../../assets/img_menu/pizza8.png";

const imageMap = {
    "pizza1.jpg": pizza1,
    "pizza2.jpg": pizza2,
    "pizza3.jpg": pizza3,
    "pizza4.jpg": pizza4,
    "pizza5.jpg": pizza5,
    "pizza6.jpg": pizza6,
    "pizza7.jpg": pizza7,
    "pizza8.jpg": pizza8,
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
                    size: "Personal",
                    categoria: "Pizzas",
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
