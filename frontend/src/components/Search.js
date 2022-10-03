import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Search = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <Stack direction="horizontal" gap={2}>
          <Form.Control
            type="text"
            value={input}
            name="searchQuery"
            id="searchQuery"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default Search;
