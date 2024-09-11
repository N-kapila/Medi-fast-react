import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaAngleRight,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 py-5 text-start">
        <Container className="py-5">
          <Row className="g-5">
            <Col lg={3} md={6}>
              <h4 className="d-inline-block text-primary-color text-uppercase border-bottom border-5 border-secondary mb-4">
                Get In Touch
              </h4>
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p className="mb-2">
                <FaMapMarkerAlt className="text-primary-color me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FaEnvelope className="text-primary-color me-3" />
                info@example.com
              </p>
              <p className="mb-0">
                <FaPhoneAlt className="text-primary-color me-3" />
                +012 345 67890
              </p>
            </Col>

            <Col lg={3} md={6}>
              <h4 className="d-inline-block text-primary-color text-uppercase border-bottom border-5 border-secondary mb-4">
                Quick Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Home
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Meet The Team
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Latest Blog
                </a>
                <a className="text-light" href="#">
                  <FaAngleRight className="me-2" />
                  Contact Us
                </a>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <h4 className="d-inline-block text-primary-color text-uppercase border-bottom border-5 border-secondary mb-4">
                Popular Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Home
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Meet The Team
                </a>
                <a className="text-light mb-2" href="#">
                  <FaAngleRight className="me-2" />
                  Latest Blog
                </a>
                <a className="text-light" href="#">
                  <FaAngleRight className="me-2" />
                  Contact Us
                </a>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <h4 className="d-inline-block text-primary-color text-uppercase border-bottom border-5 border-secondary mb-4">
                Newsletter
              </h4>
              <Form action="">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Your Email Address"
                    className="p-3 border-0"
                  />
                  <Button variant="primary">Sign Up</Button>
                </InputGroup>
              </Form>
              <h6 className="text-primary-color text-uppercase mt-4 mb-3">
                Follow Us
              </h6>
              <div className="d-flex">
                <a
                  className="rounded-circle me-2"
                  href="#"
                  style={{ fontSize: "24px" }}
                >
                  <FaTwitter />
                </a>
                <a
                  className="rounded-circle me-2"
                  href="#"
                  style={{ fontSize: "24px" }}
                >
                  <FaFacebookF />
                </a>

                <a
                  className="rounded-circle me-2"
                  href="#"
                  style={{ fontSize: "24px" }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="rounded-circle me-2"
                  href="#"
                  style={{ fontSize: "24px" }}
                >
                  <FaInstagram />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <Container>
          <Row className="g-5">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-primary-color" href="#">
                  MediFast
                </a>
                . All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
