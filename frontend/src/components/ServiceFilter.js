import React, { useEffect, useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const ServiceFilter = ({ filter, setFilter }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const getStateList = async () => {
    const response = await axios.get("/api/services/states");
    setStates(response.data);
  };

  const getCityList = async (state) => {
    const response = await axios.get(`/api/services/cities?state=${state}`);
    setCities(response.data);
  };

  const chooseState = (e) => {
    setFilter({ ...filter, state: e.target.value });
    getCityList(e.target.value);
  };

  const chooseCity = (e) => {
    setFilter({ ...filter, city: e.target.value });
  };

  useEffect(() => {
    getStateList();
  }, []);

  return (
    <Form>
      <Stack direction="horizontal" gap={2}>
        <Form.Group controlId="state">
          <Form.Select
            className="w-auto"
            value={filter.state}
            onChange={(e) => chooseState(e)}
          >
            <option value="">Choose State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Select
            className="w-auto"
            disabled={filter.state === ""}
            value={filter.city}
            onChange={(e) => chooseCity(e)}
          >
            <option value="">Choose City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Select
            className="w-auto"
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </Form.Select>
        </Form.Group>
      </Stack>
    </Form>
  );
};

export default ServiceFilter;
