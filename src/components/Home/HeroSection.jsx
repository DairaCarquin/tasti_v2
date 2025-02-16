import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import burgerImg from "../../assets/img/pngwing1.png";
import juiceImg from "../../assets/img/jugofondo.png";
import pizzaImg from "../../assets/img/pizza-peperoni.png";
import shawarmaImg from "../../assets/img/shawaafondo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const slides = [
    {
        title: "MAGIC BURGER",
        category: "FAST FOOD BURGERS",
        description: "¡Descubre la magia en cada bocado! Nuestras hamburguesas están hechas con ingredientes frescos y de alta calidad, combinados para crear sabores irresistibles.",
        image: burgerImg,
    },
    {
        title: "BUBBLE JUICE",
        category: "JUICEBBLE",
        description: "¡La bebida más refrescante y divertida! Nuestras bebidas burbujeantes están llenas de sabor y color, perfectas para cualquier ocasión. ¡Descubre la magia de las burbujas!",
        image: juiceImg,
    },
    {
        title: "PEPPERONI",
        category: "PEPERONIZZA",
        description: "¡La pizza italiana que enamora a todos! Nuestra pizza de pepperoni, hecha con una masa casera y los mejores ingredientes, es una explosión de sabor en cada mordida. ¡Siente la magia de la pizza perfecta!",
        image: pizzaImg,
    },
    {
        title: "SHAWARMA",
        category: "SHAWARMA",
        description: "¡Un viaje culinario al Medio Oriente en cada bocado! Nuestro shawarma, elaborado con ingredientes frescos y especias auténticas, te transportará a los mercados más vibrantes. ¡Descubre la magia de los sabores árabes!",
        image: shawarmaImg,
    },
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="section-container">
            <aside className="container">
                <div className="text-container fade">
                    <div className="burguer-info fade">
                        {slides[index].category && <span>{slides[index].category}</span>}
                        <h2>{slides[index].title}</h2>
                        <p>{slides[index].description}</p>
                    </div>

                    <a href="/menu">
                        <button className="button-nav">¡ORDENA YA!</button>
                    </a>

                    <ul className="social-links">
                        <li><a href="#" className="iconos" target="_blank" title="Facebook"><FaFacebookF /></a></li>
                        <li><a href="#" className="iconos" target="_blank" title="Instagram"><FaInstagram /></a></li>
                        <li><a href="#" className="iconos" target="_blank" title="Twitter"><FaTwitter /></a></li>
                    </ul>
                </div>
            </aside>

            <div id="img-container">
                <div className="imagenes-slider fade">
                    <img src={slides[index].image} alt={slides[index].title} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
