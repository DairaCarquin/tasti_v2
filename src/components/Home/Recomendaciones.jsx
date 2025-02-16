import React from "react";
import "../../styles/home.css";

import ensaladaImg from "../../assets/img/Ensalada.png";
import burgerMagicImg from "../../assets/img/Burgmagic.png";
import patatasImg from "../../assets/img/Patatas.png";
import shawarmaImg from "../../assets/img/Shawarma.png";
import pepperoniImg from "../../assets/img/Pepperoni.png";
import broasterBurgerImg from "../../assets/img_menu/burguer4.png";

const recomendaciones = [
  {
    titulo: "5.9",
    subtitulo: "Ensalada Cesar",
    descripcion: "Fresca ensalada romana.",
    precio: "S/.18.50",
    imagen: ensaladaImg,
    overlayText: "Frescura en cada bocado con lechuga romana, crutones dorados y aderezo César cremoso."
  },
  {
    titulo: "7.5",
    subtitulo: "Burger Magic",
    descripcion: "Una hamburguesa jugosa con carne.",
    precio: "S/.10.90",
    imagen: burgerMagicImg,
    overlayText: "Una jugosa hamburguesa acompañada de queso derretido, todo en un suave pan."
  },
  {
    titulo: "5.7",
    subtitulo: "Patatas Fritas",
    descripcion: "Papas cortadas en tiras y fritas.",
    precio: "S/.8.90",
    imagen: patatasImg,
    overlayText: "Crujientes y doradas, perfectas para picar o acompañar cualquier plato."
  },
  {
    titulo: "4.8",
    subtitulo: "Shawarma",
    descripcion: "Finas láminas de carne marinada.",
    precio: "S/.15.50",
    imagen: shawarmaImg,
    overlayText: "Carne marinada y asada, envuelta en pan pita con vegetales y salsa de yogur. ¡Irresistible!"
  },
  {
    titulo: "7.8",
    subtitulo: "Pepperoni",
    descripcion: "Una pizza clásica pepperoniana.",
    precio: "S/.29.90",
    imagen: pepperoniImg,
    overlayText: "Clásica y deliciosa, cubierta con salsa de tomate, mozzarella y rodajas de pepperoni picante."
  },
  {
    titulo: "7.6",
    subtitulo: "Broaster Burguer",
    descripcion: "Un pollo crocante original.",
    precio: "S/.20.00",
    imagen: broasterBurgerImg,
    overlayText: "Pollo crujiente broaster en un pan suave con lechuga, tomate y salsa especial. ¡Sabor único!"
  }
];

const Recomendaciones = () => {
  return (
    <div className="recomend">
      <h1 className="menu-title">RECOMENDACIONES</h1>
      <h2>Descubre los platos favoritos de nuestros clientes, nuestras recomendaciones te garantizan una
        experiencia culinaria inolvidable.</h2>
      <div id="container-recomendacion">
        {recomendaciones.map((rec, index) => (
          <div className="card" key={index}>
            <div className="imagenes">
              <img src={rec.imagen} alt={rec.subtitulo} />
              <div className="overlay">
                <div className="overlay-text">{rec.overlayText}</div>
              </div>
            </div>
            <div className="card-content">
              <h4>{rec.titulo}</h4>
              <span>{rec.subtitulo}</span>
              <p>{rec.descripcion}</p>
              <p className="price">{rec.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomendaciones;
