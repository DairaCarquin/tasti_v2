import React, { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import { obtenerCategoriaPorNombre, obtenerProductosPorCategoria } from "../../services/categoria.services";

import comp1 from "../../assets/img_menu/comp1.png";
import comp2 from "../../assets/img_menu/comp2.png";
import comp3 from "../../assets/img_menu/comp3.png";
import comp4 from "../../assets/img_menu/comp4.png";
import comp5 from "../../assets/img_menu/comp5.png";
import comp6 from "../../assets/img_menu/comp6.png";

const imageMap = {
  "comp1.jpg": comp1,
  "comp2.jpg": comp2,
  "comp3.jpg": comp3,
  "comp4.jpg": comp4,
  "comp5.jpg": comp5,
  "comp6.jpg": comp6,
};

const ComplementosSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchComplementos = async () => {
      try {
        const categoria = await obtenerCategoriaPorNombre("Complementos");
        if (!categoria) return;

        const productos = await obtenerProductosPorCategoria(categoria.id);
        const productsWithImages = productos.map((producto) => ({
          id: producto.id,
          name: producto.nombre,
          price: producto.precio,
          image: imageMap[producto.imagen] || comp1,
          size: "Personal",
          categoria: "Complementos",
        }));

        setProducts(productsWithImages);
      } catch (error) {
        return error;
      }
    };

    fetchComplementos();
  }, []);

  return <MenuSection title="Complementos" items={products} />;
};

export default ComplementosSection;
