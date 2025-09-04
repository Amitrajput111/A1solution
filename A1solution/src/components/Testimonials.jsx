import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
  {
    name: "Client A",
    quote: "A1Solution transformed our vision into a powerful software solution.",
  },
  {
    name: "Client B",
    quote: "Professional, responsive, and highly skilled developers.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h2 className="mb-5">Testimonials</h2>
        <Row>
          {testimonials.map((t, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <p className="fst-italic mb-3">"{t.quote}"</p>
                  <p className="fw-bold">- {t.name}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
