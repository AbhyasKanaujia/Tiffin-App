import React from "react";
import "./LandingPage.css";

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
        className="backgroundImageContainer"
        fluid
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container className="callToActionContainer">
          <Row>
            <Col
              className="callToActionCard text-center text-white p-3 rounded"
              xs="auto"
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
            <Stack className="feature">
              <div className="featureIcon">
                <img src={bicycle} />
              </div>
              <h6>Timely Delivery</h6>
              <p>Ontime deliver at your doorstep</p>
            </Stack>
          </Col>
          <Col>
            <Stack className="feature">
              <div className="featureIcon">
                <img src={nutrition} />
              </div>
              <h6>Healhty Food</h6>
              <p>Get homelike healthy and tasty food</p>
            </Stack>
          </Col>
          <Col>
            <Stack className="feature">
              <div className="featureIcon">
                <img src={wallet} />
              </div>
              <h6>Great Price</h6>
              <p>Find services with best prices</p>
            </Stack>
          </Col>
        </Row>
      </Container>
      {/* Testimonials */}
    </>
  );
};

export default LandingPage;
