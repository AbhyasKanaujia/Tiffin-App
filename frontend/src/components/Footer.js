import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container fluid className="mt-auto bg-dark text-secondary py-3">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            National Institute of Technology Patna
          </Col>
          <Col className="text-center">
            Made by <br />
            Abhyas Kumar Kanaujia
            <br />
            Khushboo Gupta
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
