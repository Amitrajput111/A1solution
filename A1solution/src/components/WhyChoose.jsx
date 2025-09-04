import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    <section className="py-5 bg-primary text-white text-center">
      <Container>
        <h2 className="mb-5">Why Choose A1Solution</h2>
        <Row className="justify-content-center">
          {points.map((point, index) => (
            <Col md={6} lg={2} key={index} className="mb-4">
              <Card className="h-100 bg-transparent border-0 text-white">
                <Card.Body>
                  <FaCheckCircle size={30} className="mb-2" />
                  <Card.Text>{point}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
