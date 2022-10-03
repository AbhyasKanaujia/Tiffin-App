import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      You don't have a subscripton.{" "}
      <Link to="/search"> Find the one that's best for you</Link>
    </div>
  );
};

export default HomeScreen;
