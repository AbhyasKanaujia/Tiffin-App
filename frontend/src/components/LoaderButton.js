import React from "react";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const LoaderButton = ({ loading, children }) => {
  return (
    <Button className="mb-3 w-100" type="submit" disabled={loading}>
      {loading ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default LoaderButton;
