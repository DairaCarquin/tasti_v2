import React, { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import { obtenerCategoriaPorNombre, obtenerProductosPorCategoria } from "../../services/categoria.services";

import burguer1 from "../../assets/img_menu/burguer1.png";
import burguer2 from "../../assets/img_menu/burguer2.png";
import burguer3 from "../../assets/img_menu/burguer3.png";
import burguer4 from "../../assets/img_menu/burguer4.png";
import burguer5 from "../../assets/img_menu/burguer5.png";
import burguer6 from "../../assets/img_menu/burguer6.png";
import burguer7 from "../../assets/img_menu/burguer7.png";
import burguer8 from "../../assets/img_menu/burguer8.png";

const imageMap = {
    "burguer1.jpg": burguer1,
    "burguer2.jpg": burguer2,
    "burguer3.jpg": burguer3,
    "burguer4.jpg": burguer4,
    "burguer5.jpg": burguer5,
    "burguer6.jpg": burguer6,
    "burguer7.jpg": burguer7,
    "burguer8.jpg": burguer8,
};

const BurgerSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchBurgers = async () => {
            try {
                const categoria = await obtenerCategoriaPorNombre("Hamburguesas");

                if (!categoria) {
                    return;
                }

                const productos = await obtenerProductosPorCategoria(categoria.id);

                const productsWithImages = productos.map((product) => ({
                    id: product.id,
                    name: product.nombre,
                    price: product.precio,
                    size: "Personal",
                    image: imageMap[product.imagen] || burguer1,
                    categoria: "Hamburguesas",
                }));

                setProducts(productsWithImages);
            } catch (error) {
                return error;
            }
        };

        fetchBurgers();
    }, []);

    return <MenuSection items={products} />;
};

export default BurgerSection;
