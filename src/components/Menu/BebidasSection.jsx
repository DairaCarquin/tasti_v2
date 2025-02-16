import React, { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import { obtenerCategoriaPorNombre, obtenerProductosPorCategoria } from "../../services/categoria.services";

import beb1 from "../../assets/img_menu/beb1.png";
import beb2 from "../../assets/img_menu/beb2.png";
import beb3 from "../../assets/img_menu/beb3.png";
import beb4 from "../../assets/img_menu/beb4.png";
import beb5 from "../../assets/img_menu/beb5.png";
import beb6 from "../../assets/img_menu/beb6.png";
import beb7 from "../../assets/img_menu/beb7.png";
import beb8 from "../../assets/img_menu/beb8.png";

const imageMap = {
    "beb1.jpg": beb1,
    "beb2.jpg": beb2,
    "beb3.jpg": beb3,
    "beb4.jpg": beb4,
    "beb5.jpg": beb5,
    "beb6.jpg": beb6,
    "beb7.jpg": beb7,
    "beb8.jpg": beb8,
};

const BebidasSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchBebidas = async () => {
            try {
                const categoria = await obtenerCategoriaPorNombre("Bebidas");

                if (!categoria) {
                    return;
                }

                const productos = await obtenerProductosPorCategoria(categoria.id);

                const productsWithImages = productos.map((product) => ({
                    id: product.id,
                    name: product.nombre,
                    price: product.precio,
                    size: "500 ml",
                    image: imageMap[product.imagen] || beb1,
                }));

                setProducts(productsWithImages);
            } catch (error) {
                return error;
            }
        };

        fetchBebidas();
    }, []);

    return <MenuSection items={products} />;
};

export default BebidasSection;
