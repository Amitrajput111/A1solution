import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    name: "Hire Flow",
    desc: "MERN stack job search platform with smart matching and real-time notifications",
    link: "#",
  },
  {
    name: "Stayora",
    desc: "Full-stack home rental marketplace built with MongoDB, Express, React & Node.js",
    link: "#",
  },
  {
    name: "AI Learning Hub",
    desc: "MERN-based AI-powered learning platform with personalized course recommendations",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 text-center">
      <Container>
        <h2 className="mb-5">Portfolio</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button href={project.link} variant="primary">
                    View Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
