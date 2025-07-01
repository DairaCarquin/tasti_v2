import React, { useEffect } from "react";
import "../../styles/ubicacion.css";

const Ubicacion = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("#ubi-nav a, .button-nav");
    const links = document.querySelectorAll("#ubi-nav a");

    const handleMouseOver = (event) =>
      (event.target.style.transform = "scale(1.1)");
    const handleMouseOut = (event) =>
      (event.target.style.transform = "scale(1)");

    const handleBorderOver = (event) =>
      (event.target.style.borderBottom = "2px solid #FF5B00");
    const handleBorderOut = (event) =>
      (event.target.style.borderBottom = "none");

    buttons.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    links.forEach((link) => {
      link.addEventListener("mouseover", handleBorderOver);
      link.addEventListener("mouseout", handleBorderOut);
    });

    return () => {
      buttons.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleBorderOver);
        link.removeEventListener("mouseout", handleBorderOut);
      });
    };
  }, []);

  return (
    <div className="contenedor-ubi">
      <div className="header-Contacto">
        <h1>Ubicación</h1>
        <p>
          Nos encontramos en el corazón de Lima Centro, un lugar vibrante y
          lleno de vida. Ven a visitarnos en
          <b> TASTY</b> y disfruta de una experiencia culinaria única en un
          ambiente acogedor y moderno. Estamos ubicados en una zona de fácil
          acceso, rodeados de los principales puntos de interés de la ciudad.
          ¡Te esperamos para que disfrutes de nuestros deliciosos platos!
        </p>
      </div>

      <div className="contenedor-ubi-columnas">
        <div className="col2-ubi">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1069.5254841666667!2d-77.00268828148926!3d-12.097764177769571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1ses!2spe!4v1734329001245!5m2!1ses!2spe"
              width="900"
              height="700"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="col1-ubi">
          <p>
            <b>Centro de Lima, Perú</b>
            <br /> +7(921) 777-777-77 <br />
            <br />
            <b>Horario de atención</b> <br />
            Lun-Sab 12:00 p.m - 8:00 p.m. <br />
            Dom 12:00 p.m. - 2:00 p.m. <br />
          </p>
          <div class="contenedor-ubi-botones">
            <button className="boton1-ubi">Contáctanos</button>
            <button className="boton2-ubi">Más información</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
