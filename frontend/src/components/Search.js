import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Search = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) navigate(`/search/${searchQuery}`);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <Stack direction="horizontal" gap={2}>
          <Form.Control
            type="text"
            value={searchQuery}
            name="searchQuery"
            id="searchQuery"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default Search;
