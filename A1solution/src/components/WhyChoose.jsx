import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Modern Tech Stack",
  "Fast & Efficient Delivery",
  "Scalable Solutions",
  "Client-Centric Approach",
  "Transparent Communication",
];

const WhyChoose = () => {
  return (
    <section className="py-5 section-why text-white text-center">
      <Container>
        <h2 className="mb-5 text-white">Why Choose A1Solution</h2>
        <Row className="justify-content-center">
          {points.map((point, index) => (
            <Col md={6} lg={2} key={index} className="mb-4">
              <div className="why-card">
                <FaCheckCircle size={30} className="mb-3" />
                <p className="mb-0">{point}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
