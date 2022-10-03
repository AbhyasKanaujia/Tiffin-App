import React from "react";
import ServiceCard from "./ServiceCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceCards = ({ services }) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {services.map((service) => (
          <Col key={service._id}>
            <ServiceCard service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;
