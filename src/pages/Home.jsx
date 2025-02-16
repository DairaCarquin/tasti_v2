import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Home/Menu";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroSection";

import fondoImage from "../assets/img/Fondo.png";

const Home = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${fondoImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
        }}>
            <Navbar />
            <HeroSection />
            <Menu />
            <Footer />
        </div>
    );
};

export default Home;
