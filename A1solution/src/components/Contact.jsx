import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
      <Container>
        <h2 className="mb-5">Contact Us</h2>
        <Form className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={4} placeholder="Message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Request a Quote
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;

