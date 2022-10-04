import React from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import background from "../images/landing_background.jpeg";
import bicycle from "../images/bicycle.png";
import nutrition from "../images/nutrition.png";
import wallet from "../images/wallet.png";

const LandingPage = () => {
  return (
    <>
      {/* Banner */}
      <Container
        fluid
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Container style={{ height: "100%" }}>
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Col
              xs="auto"
              className="text-center text-white p-3"
              style={{ backgroundColor: "#8D6E63", borderRadius: "5px" }}
            >
              <h3>Healthy Hygenic and Homemade</h3>
              <h1 style={{ fontSize: "3.5rem" }}>Tiffin Service</h1>
              <p>The food at your doorstep</p>
              <Button as={Link} to="/search" variant="success">
                Find one for me
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Features */}
      <Container className="my-3">
        <Row xs={1} sm={3}>
          <Col>
            <Stack>
              <div className="d-flex justify-content-center">
                <img src={bicycle} width="48px" />
              </div>
              <h6 className="text-center">Timely Delivery</h6>
              <p
                className="text-center"
                style={{ color: "grey", fontSize: "0.8rem" }}
              >
                Ontime deliver at your doorstep
              </p>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <div className="d-flex justify-content-center">
                <img src={nutrition} width="48px" />
              </div>
              <h6 className="text-center">Healhty Food</h6>
              <p
                className="text-center"
                style={{ color: "grey", fontSize: "0.8rem" }}
              >
                Get homelike healthy and tasty food
              </p>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <div className="d-flex justify-content-center">
                <img src={wallet} width="48px" />
              </div>
              <h6 className="text-center">Great Price</h6>
              <p
                className="text-center"
                style={{ color: "grey", fontSize: "0.8rem" }}
              >
                Find services with best prices
              </p>
            </Stack>
          </Col>
        </Row>
      </Container>
      {/* Testimonials */}
    </>
  );
};

export default LandingPage;
