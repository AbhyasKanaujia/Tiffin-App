import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";
import ServiceFilter from "../components/ServiceFilter";
import ServiceCards from "../components/ServiceCards";

import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({
    state: "",
    city: "",
    type: "Non-Veg",
  });
  const [services, setServices] = useState([]);

  useEffect(() => {
    const filterServices = async () => {
      const response = await axios.get(
        `/api/services?q=${searchQuery}&state=${filter.state}&city=${filter.city}&type=${filter.type}`
      );

      setServices(response.data);
    };

    filterServices();
  }, [filter, searchQuery]);

  return (
    <Container className="my-3">
      <Stack gap={3}>
        <Search setSearchQuery={setSearchQuery} />
        <ServiceFilter filter={filter} setFilter={setFilter} />
        <ServiceCards services={services} />
      </Stack>
    </Container>
  );
};

export default SearchScreen;
