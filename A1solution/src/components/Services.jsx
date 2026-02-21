import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const services = [
  { title: "Web Development", icon: <FaLaptopCode size={50} />, desc: "Responsive websites using React & Node.js" },
  { title: "Mobile Apps", icon: <FaMobileAlt size={50} />, desc: "iOS & Android apps development" },
  { title: "Cloud Solutions", icon: <FaCloud size={50} />, desc: "Scalable cloud infrastructure & DevOps" },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Our Services</h2>
        <Row>
          {services.map((s, idx) => (
            <Col md={4} key={idx} className="mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 text-center shadow-sm p-3">
                <div className="mb-3 service-icon">{s.icon}</div>
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
