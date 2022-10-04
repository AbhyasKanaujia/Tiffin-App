import React, { useState } from "react";
import axios from "axios";

import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoaderButton from "../components/LoaderButton";

const LoginScreen = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/auth/login",
      { email, password },
      config
    );

    localStorage.setItem("UserInfo", JSON.stringify(data));
    setToken(data.token);

    setLoading(false);
  };

  return (
    <Container>
      <Row>
        <Col sm={8} md={6} xl={4}>
          <h1>Login</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <LoaderButton loading={loading}>Login</LoaderButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
