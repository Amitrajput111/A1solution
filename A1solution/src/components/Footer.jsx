import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <Container>
        <h5 className="fw-bold mb-3">A1Solution</h5>
        <p>© 2025 A1Solution. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="#" className="text-white fs-5"><FaLinkedin /></a>
          <a href="#" className="text-white fs-5"><FaTwitter /></a>
          <a href="#" className="text-white fs-5"><FaGithub /></a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
