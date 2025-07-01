import React, { useEffect, useState } from "react";
import MenuSection from "./MenuSection";
import { obtenerCategoriaPorNombre, obtenerProductosPorCategoria } from "../../services/categoria.services";

import otros1 from "../../assets/img_menu/otros1.png";
import otros2 from "../../assets/img_menu/otros2.png";
import otros3 from "../../assets/img_menu/otros3.png";
import otros4 from "../../assets/img_menu/otros4.png";
import otros5 from "../../assets/img_menu/otros5.png";
import otros6 from "../../assets/img_menu/otros6.png";

const imageMap = {
  "otros1.jpg": otros1,
  "otros2.jpg": otros2,
  "otros3.jpg": otros3,
  "otros4.jpg": otros4,
  "otros5.jpg": otros5,
  "otros6.jpg": otros6,
};

const OtrosSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOtros = async () => {
      try {
        const categoria = await obtenerCategoriaPorNombre("Otros");
        if (!categoria) return;

        const productos = await obtenerProductosPorCategoria(categoria.id);
        const productsWithImages = productos.map((producto) => ({
          id: producto.id,
          name: producto.nombre,
          price: producto.precio,
          image: imageMap[producto.imagen] || otros1,
          size: "Personal",
          categoria: "Otros",
        }));

        setProducts(productsWithImages);
      } catch (error) {
        return error;
      }
    };

    fetchOtros();
  }, []);

  return <MenuSection title="Otros" items={products} />;
};

export default OtrosSection;
