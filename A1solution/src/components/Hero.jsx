import React from "react";
import { Container, Button } from "react-bootstrap";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section className="bg-primary text-white text-center py-5" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px" }}>
      <Container>
        <h1 className="display-3 fw-bold mb-4 hero-title">Welcome to A1Solution</h1>
        <p className="lead mb-5 hero-lead">
          We build modern, scalable, and secure software solutions tailored to your business needs.
        </p>
        <div className="hero-buttons">
          <Button variant="light" size="lg" className="me-3" href="#services">
            Our Services
          </Button>
          <Button variant="outline-light" size="lg" href="#contact">
            Get Started
          </Button>
        </div>
        <div className="mt-5" data-aos="zoom-in">
          <img src={heroImg} alt="Hero" className="img-fluid" style={{ maxWidth: "500px" }} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
