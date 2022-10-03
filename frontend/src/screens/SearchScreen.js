import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";
import ServiceFilter from "../components/ServiceFilter";
import ServiceCards from "../components/ServiceCards";

import Stack from "react-bootstrap/Stack";

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
        `/api/services?state=${filter.state}&city=${filter.city}&type=${filter.type}`
      );

      setServices(response.data);
    };

    filterServices();
  }, [filter]);

  return (
    <Stack gap={3}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ServiceFilter filter={filter} setFilter={setFilter} />
      <ServiceCards services={services} />
    </Stack>
  );
};

export default SearchScreen;
