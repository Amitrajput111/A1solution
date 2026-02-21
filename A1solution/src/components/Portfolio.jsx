import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    name: "Hire Flow",
    desc: "Job search platform with smart matching and application tracking",
    link: "#",
  },
  {
    name: "Stayora",
    desc: "Home rental marketplace with booking and property management",
    link: "#",
  },
  {
    name: "AI Learning Hub",
    desc: "Interactive AI-powered learning platform with personalized courses",
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
