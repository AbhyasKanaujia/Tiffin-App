import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ServiceCard = ({ service }) => {
  return (
    <Card className="my-2">
      <Card.Img src={service.image} variant="top" />
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>
          {`${service.type} | ${service.mealCount} meals`}
          <br />
          <span style={{ fontSize: "2rem" }}>{`₹${service.monthlyRent}`}</span>
          /mo
        </Card.Text>
        <Button vaiant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
