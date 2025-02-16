import React, { useState } from "react";
import "../../styles/nosotros.css";

import burguer1 from "../../assets/img/burguer-part1.png";
import burguer2 from "../../assets/img/burguer-part2.png";
import burguer3 from "../../assets/img/burguer-part3.png";
import burguer4 from "../../assets/img/burguer-part4.png";
import burguer5 from "../../assets/img/burguer-part5.png";
import burguer6 from "../../assets/img/burguer-part6.png";
import burguer7 from "../../assets/img/burguer-part7.png";
import burguer8 from "../../assets/img/burguer-part8.png";

const images = [burguer1, burguer2, burguer3, burguer4, burguer5, burguer6, burguer7, burguer8];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="carousel-item">
                        <img src={src} alt={`B${index + 1}`} className="burger-part" />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" onClick={nextSlide}>
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
};

export default Carousel;
