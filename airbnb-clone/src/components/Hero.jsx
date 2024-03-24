import React from "react";
import HeroImage from "../assets/hero-image.png"


const Hero = () => (
    <>
        <section className="hero">
            <div className="hero--image-wrapper">
                <img src={HeroImage} alt="" className="hero--image" />
            </div>
            <h1 className="hero--heading">
                Online Experiences
            </h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    </>
)

export default Hero;