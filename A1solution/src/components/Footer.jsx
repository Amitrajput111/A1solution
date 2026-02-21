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
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
